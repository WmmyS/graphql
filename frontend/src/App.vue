<template>
  <div>
    <div id="slogan" class="text-center">
      <h1>Gerador de Nomes</h1>
      <br />
      <h6 class="secondary-text">
        Teste de implementação de um CRUD com Vue.js e Graphql
      </h6>
    </div>
    <div id="main">
      <div class="container">
        <div class="row">
          <div class="col-md">
            <h5>
              Prefixos <span class="badge bg-primary"> {{ prefixos.length }}</span>
            </h5>
            <div class="card">
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item" v-for="prefixo in prefixos" :key="prefixo">
                    <div class="row">
                      <div class="col-md d-flex align-items-center">
                        {{ prefixo }}
                      </div>
                      <div class="col-md text-align-end">
                        <button class="btn btn-primary" v-on:click="deletePrefixo(prefixo)">
                          <span class="fa fa-trash"></span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <br />
                  <div class="input-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Digite o Prefixo"
                      v-model="newPrefixo"
                      v-on:keyup.enter="addPrefixo"
                    />
                    <div class="input-group-append">
                      <button class="btn btn-primary" v-on:click="addPrefixo">
                        <span class="fa fa-plus"></span>
                      </button>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md">
            <h5>
              Sufixos <span class="badge bg-primary"> {{ sufixos.length }}</span>
            </h5>
            <div class="card">
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item" v-for="sufixo in sufixos" :key="sufixo">
                    <div class="row">
                      <div class="col-md d-flex align-items-center">
                        {{ sufixo }}
                      </div>
                      <div class="col-md text-align-end">
                        <button class="btn btn-primary" v-on:click="deleteSufixo(sufixo)">
                          <span class="fa fa-trash"></span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <br />
                  <div class="input-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Digite o Sufixo"
                      v-model="newSufixo"
                      v-on:keyup.enter="addSufixo"
                    />
                    <div class="input-group-append">
                      <button class="btn btn-primary" v-on:click="addSufixo">
                        <span class="fa fa-plus"></span>
                      </button>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <br />
        <h5>
          Domínios <span class="badge bg-primary"> {{ domains.length }} </span>
        </h5>
        <div class="card">
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item" v-for="domain in domains" :key="domain">
                {{ domain }}
              </li>
              <br />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

export default {
	name: "App",
	data: function () {
		return {
			newPrefixo: "",
			newSufixo: "",
			prefixos: ["Air", "Jet", "Flight"],
			sufixos: ["Hub", "Station", "Mart"],
			domains: ["AirHub", "JetStation", "FlightMart"],
		};
	},
	methods: {
		addPrefixo() {
			if (this.newPrefixo !== "") {
				this.prefixos.push(this.newPrefixo);
				this.newPrefixo = "";
				this.generateDomains();
			}
		},
		addSufixo() {
			if (this.newSufixo !== "") {
				this.sufixos.push(this.newSufixo);
				this.newSufixo = "";
				this.generateDomains();
			}
		},
		generateDomains() {
			this.domains = [];
			for (let prefixo of this.prefixos) {
				for (let sufixo of this.sufixos) {
					this.domains.push(prefixo + sufixo);
				}
			}
		},
		deletePrefixo(prefixo) {
			this.prefixos.splice(this.prefixos.indexOf(prefixo), 1);
			this.generateDomains();
		},
		deleteSufixo(sufixo) {
			this.sufixos.splice(this.sufixos.indexOf(sufixo), 1);
			this.generateDomains();
		}
	},
	components: {},
};
</script>

<style>
#slogan {
  background-color: #3f51b5;
  color: white;
  padding: 20px;
}

#main {
  background-color: #f1f1f1;
  padding-top: 30px;
  padding-bottom: 30px;
}

.text-align-end {
  text-align: end;
  margin-right: -1px;
  padding-right: 0px;
}
</style>
