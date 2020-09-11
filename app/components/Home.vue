<template lang="html">
    <Page class="page" backgroundSpanUnderStatusBar="true" actionBarHidden="true" >
        <GridLayout rows="auto,auto,*" class="gridlay" ~mainContent>
            <GridLayout width="100%" columns="auto, *" col="0" row="0" paddingBottom="18" paddingTop="36" class="headergrid">
                <StackLayout width="30" height="30" col="0"  @tap="openDrawer()" marginLeft="10" >
                    <Label class="bar" />
                    <Label class="bar" />
                    <Label class="bar" />
                </StackLayout>
                <Image src="~/images/logo_dark.png" stretch="aspectFill" col="1" width="200" height="36"   > </Image>
            </GridLayout>
            <SearchBar hint="Buscar" :text="searchPhrase" @loaded="onSearchBarLoaded($event)"
                @textChange="ontextChange($event)"  col="0" row="1" @clear="onClear" class="searchbar" />

            <ListView for="p in team" col="0" row="2" class="list-group" rows="*" colums="auto,auto"
                ref="organizaciones" separatorColor="transparent" >
                <v-template> 
                   <StackLayout class="content" height="205" >
                       <StackLayout class="list-group-item" marginBottom="20" horizontalAlignment="center">
                           <Image :src="p.img" stretch="aspectFill" class="card-img" @tap="showDetails(p)" > </Image>
                           <Image :src="p.fav ? '~/images/on.png' : '~/images/off.png'" stretch="aspectFill" width="30" height="30" @tap="addFavorito(p.name)"   > </Image>
                           <Label :text="p.name" class="nameclass " textWrap="true" flexGrow="true" marginLeft="15" marginBottom="23" @tap="showDetails(p)" />
                           <Label :text="p.direccion" class="nameclass " textWrap="true" flexGrow="true" visibility="collapsed" />
                        </StackLayout>  
                    </StackLayout>
                </v-template>
                   <StackLayout class="content" height="205" >
                       <StackLayout class="list-group-item" marginBottom="20" horizontalAlignment="center">
                           <Button @tap="shownosotros()" >¿No existe tu institución? Contactanos</Button>
                        </StackLayout>  
                    </StackLayout>
            </ListView>
            <StackLayout col="0" class="content norecords " row="*" :visibility="hayteam ? 'collapsed' : 'visible'" ref="norecords">
                <GridLayout orientation="horizontal" class="list-group-item" marginLeft="15" marginRight="15" marginBottom="20" paddingRight="20" horizontalAlignment="center"  >
                    <Label text="No se encontraron organizaciones para su busqueda." class="nameclass" textWrap="true" />
                </GridLayout>
                <StackLayout class="content" height="205" >
                   <StackLayout class="list-group-item" marginBottom="20" horizontalAlignment="center">
                           <Button @tap="shownosotros()" >¿No existe tu institución? Contactanos</Button>
                        </StackLayout>  
                    </StackLayout>
            </StackLayout> 
            <!--<StackLayout col="0" class="content " row="4" ref="nuevainstitucion">
                <Button @tap="shownosotros()" >¿No existe tu institución? Contactanos</Button>
            </StackLayout> -->
        </GridLayout>
    </Page>
</template>

<script>
    
    import Profile from "./Profile";
    import Nosotros from "./Nosotros";
    import sideDrawer from "~/mixins/sideDrawer"
    import { ObservableArray } from "tns-core-modules/data/observable-array";


    export default {
        props: ["tipolista"],
        mixins: [ sideDrawer ],
        data() {
            return {
                isItemVisible: false,
                hayteam: true,
                aplicar: true,
                titulo: 0,
                searchPhrase: "",
                team: new ObservableArray(this.$store.state.orgs),
                favoritos: []
            };
        }, 
        async created() {
            this.team = this.$store.state.orgs;
            this.fsearch('');
        },
        methods: {
            onSearchBarLoaded: function(event) {
                if (event.object.android) {
                    setTimeout(() => {
                        event.object.dismissSoftInput();
                        event.object.android.clearFocus();
                    }, 0);
                }
            },
            increment() {
                this.$store.commit('increment');
            },
            fsearch(texto) {
                this.team = this.$store.state.orgs;
                setTimeout(() => {
            
                    if(this.aplicar){
                        let organizaciones = this.$refs.organizaciones;
                        let norecords = this.$refs.norecords;
                        
                        var search = -1;
                        var search_2 = 0;
                        var searchv1 = '';
                        var searchv2 = '';
                        var searchv3 = '';
                        var tot = 0;
                        var thereitis = 0;

                        this.team = [];
                        this.noteam = [];
                        this.favoritos = [];
                        
                        this.hayteam = true;
                        this.isItemVisible = true;
                        searchv2 = texto.toLowerCase();
                        organizaciones.refresh();
                        for (var i = 0, len = this.$store.state.orgs.length; i < len; i++) {
                            var el = this.$store.state.orgs[i];
                            searchv1 = el.name.toLowerCase();
                            searchv3 = el.categoria;
                            search = searchv1.search(searchv2);
                            if(texto == ''){
                                if(this.tipolista != '' && this.tipolista != 'fav'){
                                    search = searchv3.search(this.tipolista);
                                }
                            }
                            if (search != -1 || (searchv2 == '' && this.tipolista == '')) {
                                
                                thereitis = 0;
                                el.fav = 0;
                                for (var j = 0, len2 = this.$store.state.favoritos.length; j < len2; j++) {
                                    if(this.$store.state.favoritos[j] == el.name){ 
                                        thereitis = 1;
                                        el.fav = 1;
                                    }
                                }
                                if(thereitis == 1){
                                    this.favoritos.push(el);
                                }else{
                                    if(this.tipolista != 'fav'){
                                        this.noteam.push(el);    
                                    }
                                }                            
                            }
                        }
                        this.team = this.favoritos.concat(this.noteam);
                        tot = this.team.length
                        this.hayteam = (tot >= 1);
                        this.isItemVisible = true;
                        this.aplicar = true;
                    }
                }, 120);
            },
            ontextChange(args) {
                let searchBar = args.object;
                if(searchBar.text.length > 2){
                    this.fsearch(searchBar.text);
                }
            },
            addFavorito(name) {
                this.aplicar = false;
                
                for (var i = 0, len = this.team.length; i < len; i++) {
                    if(this.team[i].name == name){
                        if(this.team[i].fav == 1){
                            this.team[i].fav = 0;
                            this.$store.commit('remove',name);
                        }else{
                            this.team[i].fav = 1;
                            this.$store.commit('increment',name);
                        }
                        this.team[i].direccion = this.team[i].direccion + " ";
                    }
                }
            },
            onClear() {
                this.fsearch('');
            },
            removeFavorito(name) {
                this.$store.commit('remove',name);
            },
            onButtonTap() {},
            showDetails(ide) {
                this.$navigateTo(Profile, {
                    animated: true,
                    transition: {
                        name: "slideLeft",
                        duration: 550,
                        curve: "easeInOut"
                    },
                    props: {
                        member: ide
                   }
                });
            }
        }
    };
</script>

<style scoped lang="scss">
    .btnbig{
        width: 100%;
        height: 80px;
        background-color: white;
        color:#333;
    }
    .norecords{
        visibility: hidden;
    }
    .nameclass { 
        font-size: 23;
        vertical-align: center;
        text-align: center;
        width: 100%; 
        font-family: 'Roboto-Regular';
    }
    .card-img {
        width: 260;
        margin-bottom: 15;
    }
    .list-group-item{
        padding-top: 9;
        padding-left: 20;
        padding-right: 20;
        margin-left: 20;
        margin-right: 20; 
        margin-bottom: 9;
        margin-top: 20;
        background-color: white;
        border: 0;
        border-radius: 6;
        width: 300;
    }
    .content {
        margin-left: 16;
        margin-right: 16; 
        margin-bottom: 3;  
        margin-top: 16; 
    }
    .searchbar{
        font-size: 19;
        color:#333;
        background:#eaf3fb;
        border-bottom-color: black;
        border-bottom-width: 2;
    }
</style>