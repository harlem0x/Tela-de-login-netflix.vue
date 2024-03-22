<template>
    <div>
        <h1 style="text-align: center">Conversão de Moedas</h1>

        <Dropdown v-model="fromCurrency" :options="currencies" filter optionLabel="name" placeholder="Pais de Origem" class="w-full md:w-14rem">
            <template #value="slotProps">
                <div v-if="slotProps.value" class="flex align-items-center">
                    <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`" style="width: 18px" />
                    <div>{{ slotProps.value.name }}</div>
                </div>
                <span v-else>
                    {{ slotProps.placeholder }}
                </span>
            </template>
            <template #option="slotProps">
                <div class="flex align-items-center">
                    <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px" />
                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
        </Dropdown>

        <Dropdown v-model="toCurrency" :options="currencies" filter optionLabel="name" placeholder="Pais de Origem" class="w-full md:w-14rem">
            <template #value="slotProps">
                <div v-if="slotProps.value" class="flex align-items-center">
                    <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`" style="width: 18px" />
                    <div>{{ slotProps.value.name }}</div>
                </div>
                <span v-else>
                    {{ slotProps.placeholder }}
                </span>
            </template>
            <template #option="slotProps">
                <div class="flex align-items-center">
                    <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px" />
                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
        </Dropdown>

        <InputNumber :disabled='(fromCurrency === "" || toCurrency === "")' v-model="valor" />

        <InputNumber disabled v-if="toCurrency" v-model="valorConvertido" mode="currency" :currency='toCurrency.currency' :locale="toCurrency.locale" />

    </div>
  </template>

<script>

import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import axios from 'axios';

export default {
  components: {
    Dropdown,
    InputNumber,
  },
  name: 'Tela-Conversao',
  watch: {
    fromCurrency: {
      async handler(newValue, oldValue) {
        if (oldValue.currency !== newValue.currency) {
          await this.getConversionTable(newValue.currency);
        }
      },
    },
    valor: {
      async handler(newValue, oldValue) {
        if (oldValue !== newValue) {
          const rate = this.conversionTable[this.toCurrency.currency];
          this.valorConvertido = this.valor * rate;
        }
      },
    },
  },
  methods: {
    async getConversionTable(currency) {
      axios.get(`https://open.er-api.com/v6/latest/${currency}`)
        .then((response) => {
          this.conversionTable = response.data.rates;
        });
    },

  },
  data() {
    return {
      fromCurrency: '',
      toCurrency: '',
      valorConvertido: 0,
      valor: 0,
      conversionTable: {},
      currencies: [
        {
          name: 'Australia', code: 'AU', currency: 'AUD', locale: 'en-AU',
        },
        {
          name: 'Brazil', code: 'BR', currency: 'BRL', locale: 'pt-BR',
        },
        {
          name: 'China', code: 'CN', currency: 'CNY', locale: 'zh-CN',
        },
        {
          name: 'Egypt', code: 'EG', currency: 'EGP', locale: 'en-EG',
        },
        {
          name: 'France', code: 'FR', currency: 'EUR', locale: 'fr-FR',
        },
        {
          name: 'Germany', code: 'DE', currency: 'EUR', locale: 'de-DE',
        },
        {
          name: 'India', code: 'IN', currency: 'INR', locale: 'en-IN',
        },
        {
          name: 'Japan', code: 'JP', currency: 'JPY', locale: 'ja-JP',
        },
        {
          name: 'Spain', code: 'ES', currency: 'EUR', locale: 'es-ES',
        },
        {
          name: 'United States', code: 'US', currency: 'USD', locale: 'en-US',
        },
      ],
    };
  },
};
</script>
