export const usePopulationStore = defineStore("PopulationStore", {
  state: () => ({
    sectorData: [],
   
  }),

  getters: {
    // getChildHealthSectorData: (state) => state.sectorData,
    // isLoading: (state) => state.loading,
    // getError: (state) => state.error,
    // continent: (state) => state.selectedContinent,
  },

  actions: {
    // startLoading() {
    //   this.loading = true;
    // },
    // stopLoading() {
    //   this.loading = false;
    // },
    // loadData(data) {
    //   this.sectorData = data;
    // },

    // setMap(map) {
    //   this.selectedMap = map;
    // },
    // reSetData() {
    //   this.sectorData = [];
    //   this.tempData = [];
    // },

    // setContinent(continent) {
    //   this.selectedContinent = continent;
    // },

    // updateFilteredData(data) {
    //   this.filteredData = data;
    // },

    // async GetSectorContent(sector) {
    //   this.error = null;

    //   if (!this[sector]) {
    //     this.$state[sector] = [];
    //   }

    //   try {
    //     const { $axios1 } = useNuxtApp();
    //     let page = 1;
    //     let hasMorePages = true;

    //     while (hasMorePages) {
    //       const response = await $axios1.get(
    //         `/${sector}/sector/?page=${page}`,
    //         {}
    //       );
    //       const temp = response.data;

    //       if (temp.data.results !== undefined) {
    //         this.tempData = [...this.tempData, ...temp.data.results];
    //       }

    //       // Check if there is another page
    //       hasMorePages = temp.data.total_pages > page;
    //       page += 1;
    //     }

    //     this.sectorData = this.tempData;
    //     this.insights = null;
    //   } catch (error) {
    //     this.error = error.message;
    //     console.error("Error fetching from API:", error);
    //   } finally {
    //     this.childHealthLoading = false;
    //   }
    // },

    
    // async GetSearchedSectorContent(params) {
    //   this.error = null;
    //   this.insights = null;

    //   if (!this[params.theme]) {
    //     this.$state[params.theme] = [];
    //   }

    //   try {
    //     const { $axios1 } = useNuxtApp();
    //     let page = 1;
    //     let hasMorePages = true;
    //     const size = 100;
    //     const uniqueItems = new Set(); // Use a Set to track unique items

    //     this.sectorData = [];
    //     this.tempData = [];

    //     while (hasMorePages) {
    //       // Build query parameters dynamically
    //       const queryParams = new URLSearchParams();
    //       queryParams.append("page", page);
    //       queryParams.append("size", size);
    //       if (params.indicator)
    //         queryParams.append("indicator", params.indicator);
    //       if (params.year) queryParams.append("year", params.year);
    //       if (params.continents)
    //         queryParams.append("continent", params.continents);
    //       if (params.regions) queryParams.append("region", params.regions);

    //       const response = await $axios1.get(
    //         `/${this.theme}/sector/?${queryParams.toString()}`
    //       );

    //       const temp = response.data;

    //       if (temp.data.results !== undefined) {
    //         temp.data.results.forEach((item) =>
    //           uniqueItems.add(JSON.stringify(item))
    //         );
    //       }

    //       hasMorePages = temp.data.total_pages > page;
    //       page += 1;
    //     }

    //     // Convert Set back to Array
    //     this.tempData = Array.from(uniqueItems).map((item) => JSON.parse(item));
    //     this.sectorData = this.tempData;
    //     this.insights = null;
    //   } catch (error) {
    //     this.error = error.message;
    //     console.error("Error fetching from API:", error);
    //   } finally {
    //     this.childHealthLoading = false;
    //   }
    // },

    // async GetSearchedSectorContentWithoutYear(params) {
    //   this.error = null;

    //   if (!this[params.theme]) {
    //     this.$state[params.theme] = [];
    //   }

    //   try {
    //     const { $axios1 } = useNuxtApp();
    //     let page = 1;
    //     let hasMorePages = true;
    //     const size = 100;
    //     const uniqueItems = new Set(); // Use a Set to track unique items

    //     this.sectorDataWithoutYear = [];
    //     this.tempDataNoData = [];

    //     while (hasMorePages) {
    //       // Build query parameters dynamically
    //       const queryParams = new URLSearchParams();
    //       queryParams.append("page", page);
    //       queryParams.append("size", size);
    //       if (params.indicator)
    //         queryParams.append("indicator", params.indicator);
    //       if (params.continents)
    //         queryParams.append("continent", params.continents);
    //       if (params.regions) queryParams.append("region", params.regions);

    //       const response = await $axios1.get(
    //         `/${this.theme}/sector/?${queryParams.toString()}`
    //       );

    //       const temp = response.data;

    //       if (temp.data.results !== undefined) {
    //         temp.data.results.forEach((item) =>
    //           uniqueItems.add(JSON.stringify(item))
    //         );
    //       }

    //       hasMorePages = temp.data.total_pages > page;
    //       page += 1;
    //     }

    //     // Convert Set back to Array
    //     const tempDataNoData = Array.from(uniqueItems).map((item) =>
    //       JSON.parse(item)
    //     );

    //     return tempDataNoData;
    //   } catch (error) {
    //     this.error = error.message;
    //     console.error("Error fetching from API:", error);
    //   } finally {
    //     this.childHealthLoading = false;
    //   }
    // },

    // async GetChatResponse(data) {
    //   // this.loading = true;
    //   // this.error = null;
    //   try {
    //     const { $axios2 } = useNuxtApp();
    //     const response = await $axios2.post("/chat", data);
    //     return response.data;
    //   } catch (error) {
    //     this.error = error.message;
    //     console.error("Error fetching Chat response:", error);
    //   } finally {
    //     this.loading = false;
    //   }
    // },

    // async UploadCache() {
    //   this.loading = true;
    //   this.error = null;
    //   this.insights = null;
    //   this.loadingInsights = true;

    //   // Remove id and sector from the array
    //   const filteredTemp = this.sectorData.map(
    //     ({ id, sector, updated_at, created_at, ...rest }) => rest
    //   );

    //   const formattedData = filteredTemp.map((item) => {
    //     return {
    //       Country: item.country,
    //       Continent: item.continent,
    //       Region: item.region,
    //       Indicator: item.indicator,
    //       Year: item.year.toString(),
    //       Value: item.value.toString(),
    //       Source: item.source,
    //     };
    //   });

    //   const data = {
    //     data: formattedData,
    //     theme_name: this.theme,
    //   };

    //   console.log(data);

    //   try {
    //     const { $axios2 } = useNuxtApp(); // Or $axios2, depending on the API you want to use
    //     const response = await $axios2.post("/upload_cache/", data);
    //     // this.postData = response.data;
    //     if (response.data.status === "success") {
    //       const data = { theme_name: this.theme };
    //       const { $axios2 } = useNuxtApp(); // Or $axios2, depending on the API you want to use //
    //       this.insights = null;
    //       const response = await $axios2.post("/Data_analysis/", data);
    //       this.loadingInsights = false;
    //       this.insights = response.data;
    //     }
    //   } catch (error) {
    //     this.error = error.message;
    //     console.error("Error posting data:", error);
    //     this.loadingInsights = false;
    //   } finally {
    //     this.loading = false;
    //   }
    // },

    // switchActiveSector(sector) {
    //   this.activeSector = sector;
    // },
    // setTheme(theme) {
    //   this.theme = theme;
    // },
    // async getFilters(theme) {
    //   this.theme = theme;
    //   try {
    //     const { $axios1 } = useNuxtApp();

    //     const response = await $axios1.get(`/${theme}/sector/filters/`, {});
    //     const temp = response.data;
    //     this.filters = temp.filters;

    //     return temp.filters;
    //   } catch (error) {
    //     this.error = error.message;
    //     console.error("Error fetching from API:", error);
    //     return error;
    //   }
    // },

    // async getThemes() {
    //   try {
    //     const { $axios3 } = useNuxtApp();

    //     const response = await $axios3.get(`/themes/`);
    //     this.themes = response.data;
    //     // console.log(response.data);

    //     return response.data;
    //   } catch (error) {
    //     this.error = error.message;
    //     console.error("Error fetching from API:", error);
    //     return error;
    //   }
    // },
  },
});
