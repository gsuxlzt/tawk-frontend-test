<template>
    <div class="search-container">
        <div class="searchbar">
            <input class="search-input" type="text" v-model.trim="searchText" placeholder="Search for answers" @keyup.enter="onSearch"/>
            <button class="btn" @click="onSearch"><i class="fas fa-search fa-lg"></i></button>
        </div>
        
        <div v-if="searchText && filteredCategories.length" class="dropdown-list">
            <div
                @click="selectItem(item)"
                v-for="item in filteredCategories"
                :key="item.id"
                class="dropdown-item"
            >
                <div>
                    <i :class="['fas', `fa-${item.icon}`]"></i> <span>{{ item.title }}</span>
                </div>
            </div>
        </div>
        <div v-else-if="searchText && !filteredCategories.length" class="dropdown-list error">
            <span>Sorry, your search returned no results.</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Search',
    data() {
        return {
            searchText: '',
            categories: [],
            filteredCategories: []
        }
    },
    watch: {
        searchText(newVal) {
            if (newVal)
                this.filteredCategories = this.categories.filter(x => x.title.includes(newVal));
            else 
                this.filteredSearch = [];
    
        }
    },
    async mounted() {
        // since the size of the categories is relatively small (less than 10)
        // we can fetch them on load to prepopulate the searchbar
        // instead of fetching for the results whenever a user types on the searchbar
        const url = '/api/categories'
        const { data } = await this.$http(url);
        if (data.length)
            this.categories = data;
    },
    methods: {
        onSearch() {
            if (this.searchText)
                console.log('test')
        }
    }
}
</script>


<style lang="scss" scoped>

    @import '../scss/_variables.scss';
    
    .fas {
        color: $green;
        margin-right: 4px;
    }

    .search-container {
        .searchbar {
            display: flex;
            max-width: 768px;
            margin: 0 auto;
            padding: 8px 20px;

            .search-input {
                font-family: "Lato", Arial, Helvetica, sans-serif;
                width: 100%;
                padding: 12px 16px;
                box-sizing: border-box;
                border: 1px solid $text-gray;
                border-radius: 0;
                &:focus {
                    outline: none;
                    border: 1px solid $green;
                }
            }
            .btn {
                background-color: $green;
                border: none;
                color: white;
                padding: 12px 16px;
                font-size: 16px;
                cursor: pointer;

                .fas {
                    color: white;
                }
                &:focus {
                    outline: none;
                }
            }
        }

        .dropdown-selected {
            width: 100%;
            padding: 10px 16px;
            border: 1px solid transparent;
            background: #edf2f7;
            line-height: 1.5em;
            outline: none;
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
        }

        .dropdown-list {
            position: absolute;
            width: 100%;
            margin: 0 auto;
            left: 0;
            right: 0;
            max-width: 780px;
            min-height: 150px;
            max-height: 150px;
            padding-top: 0;
            overflow-y: auto;
            overflow-x: hidden;
            background: #ffffff;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
            border-radius: 8px;
            border-top-left-radius: 0;
            border-top-right-radius: 0;

            &.error {
                color: #f44336;
                padding: 16px;
                font-size: 13px;
                box-sizing: border-box;
            }
            .dropdown-item {
                width: 100%;
                padding: 11px 16px;
                cursor: pointer;

                &:hover {
                    background: #edf2f7;
                }
            }
        }
    }


    
</style>