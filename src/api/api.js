export const Api = {
  baseUrl: "https://backend-integracao-com-frontend.onrender.com/",

  personagem: {
    endpoint: function () {
      return Api.baseUrl + "personagens";
    },
    readAll: function () {
      return this.endpoint() + '/'
    }
  },

  buildApiGetRequest: function (url) {
    return fetch(url, { method: "GET" }).catch(function (error) {
      console.error("Erro ao carregar dados" + url, error);
      toast.error("Erro ao carregar dados.");
    });
  },
};
