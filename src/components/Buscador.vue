<script setup>
import { ref, computed } from "vue";
import { getEndereco } from "../services/BuscaEndereco";

import InputMask from "primevue/inputmask";
import Button from "primevue/button";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Skeleton from "primevue/skeleton";

const cep = ref(null);
const enderecos = ref([]);
const loading = ref(false);

const COLUMNS = [
  { header: "Logradouro", field: "logradouro" },
  { header: "Bairro/Distrito", field: "bairro" },
  { header: "Cidade", field: "localidade" },
  { header: "UF", field: "uf" },
  { header: "CEP", field: "cep" },
];

const cepValido = computed(() => {
  return cep.value?.replace(/\D/g, "").length === 8;
});

async function buscarCEP() {
  loading.value = true;
  try {
    const response = await getEndereco(cep.value);
    enderecos.value = response.erro ? [] : [response];
  } catch (error) {
    console.error(error);
    enderecos.value = [];
  } finally {
    loading.value = false;
  }
}

const handleKeydown = (event) => {
  if (event.key === "Enter" && cepValido.value) {
    buscarCEP();
  }
};
</script>

<template>
  <section class="buscador d-flex gap-3 align-items-end">
    <div class="input-cep">
      <label for="cep">CEP</label>
      <InputMask
        v-model="cep"
        id="cep"
        mask="99999-999"
        autofocus
        unmask
        :pt="{ root: { onKeydown: handleKeydown } }"
      />
    </div>

    <Button
      label="Buscar"
      type="button"
      :disabled="!cepValido"
      class="button-search"
      @click="buscarCEP"
    >
      <template #icon>
        <span class="material-symbols-outlined"> search </span>
      </template>
    </Button>
  </section>

  <section class="resultados mt-4">
    <DataTable
      :value="loading ? [{}] : enderecos"
      tableStyle="min-width: 50rem"
    >
      <Column
        v-for="col of COLUMNS"
        :key="col.field"
        :field="col.field"
        :header="col.header"
      >
        <template #body="slotProps">
          <Skeleton v-if="loading" width="100%" height="1.5rem" />
          <span v-else>{{ slotProps.data[col.field] }}</span>
        </template>
      </Column>

      <template #empty>
        <div class="d-flex justify-content-center">
          {{
            cep
              ? "Nenhum endereço encontrado para este CEP."
              : "Digite um CEP e clique em buscar."
          }}
        </div>
      </template>
    </DataTable>
  </section>
</template>

<style lang="scss">
.buscador {
  .input-cep {
    display: flex;
    flex-direction: column;
    text-align: left;

    .p-inputtext {
      border-radius: 0.5rem;
    }
  }
  .button-search {
    background-color: #424866;
    color: #ffd57a;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
  }
}

.p-datatable-wrapper {
  font-family: "Poppins", serif !important;

  .p-datatable-thead {
    border-radius: 0.5rem 0px 0px 0.5rem !important;

    & > tr > th {
      font-weight: 400;
      padding: 0.75rem 1rem;
      background-color: #ffe8b8;
    }

    & > tr > th:first-child {
      border-top-left-radius: 0.5rem;
    }

    & > tr > th:last-child {
      border-top-right-radius: 0.5rem;
    }
  }

  .p-datatable-tbody {
    & > tr > td {
      padding: 0.75rem 1rem;
    }

    & > tr:last-child > td:first-child {
      border-bottom-left-radius: 0.5rem;
    }

    & > tr:last-child > td:last-child {
      border-bottom-right-radius: 0.5rem;
    }
  }
}
</style>
