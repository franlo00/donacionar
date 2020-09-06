<template lang="html">
    <Page class="page" backgroundSpanUnderStatusBar="true" actionBarHidden="true" >
        <ScrollView>
        <GridLayout rows="auto,auto,*" class="gridlay" ~mainContent>
            <GridLayout width="100%" columns="auto, *" col="0" row="0" paddingBottom="18" paddingTop="36" class="headergrid">
                <StackLayout width="30" height="30" col="0"  @tap="openDrawer()" marginLeft="10" >
                    <Label class="bar" />
                    <Label class="bar" />
                    <Label class="bar" />
                </StackLayout>
                <Image src="~/images/logo_dark.png" stretch="aspectFill" col="1" width="200" height="36"   > </Image>
            </GridLayout>
            <StackLayout class="list-group-item" col="0" row="1" marginBottom="20" horizontalAlignment="left" width="96%" marginLeft="2%">
                <Label text="Si necesitas contactarnos para adherir tu Institución a nuestra App o por cualquier otra consulta, podes hacerlo." class="nameclass " textWrap="true" flexGrow="true" marginLeft="25" marginBottom="23" marginTop="35" marginRight="25" />
                <Label text="www.donacion.ar" class="nameclass " textWrap="true" flexGrow="true" marginLeft="15" marginBottom="5" @tap="onWeb" />
                
                <GridLayout  columns="auto, 30" marginBottom="10" marginTop="10"  horizontalAlignment="center">
                    <Label text="contacto@donacion.ar" class="contacto " @tap="onTap" col="0" marginRight="10" />
                    <Image src="~/images/envelope-closed-64.png" stretch="aspectFill" width="30" height="30" col="1"  @tap="onTap" marginLeft="0" > </Image>
                </GridLayout>
                <GridLayout  columns="auto, 30" marginBottom="10" marginTop="10" horizontalAlignment="center">
                    <Label text="+54 9 11 31752908" class="contacto " @tap="onWhat" marginRight="10" />
                    <Image src="~/images/whatsapp-64.png" stretch="aspectFill" width="30" height="30" col="2"  @tap="onWhat"  > </Image>
                </GridLayout>
                <Label text="En donacion.ar nos dedicamos a potenciar la recaudación de fondos de organizaciones combinando tecnología, know how y comunicación. " class="nameclass " textWrap="true" flexGrow="true" marginLeft="25" marginBottom="23" marginRight="25" @tap="onPhone" />
                <Label text="Desde el 2016 trabajamos codo a codo con instituciones de todo el pais realizando campañas de recaudación de alto impacto. " class="nameclass " textWrap="true" flexGrow="true" marginLeft="25" marginBottom="23" marginRight="25" @tap="onPhone" />
            </StackLayout>
        </GridLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import * as http from "http";
    import Home from "./Home";
    import sideDrawer from "~/mixins/sideDrawer"
    import * as appavailability from "nativescript-appavailability";
    import * as utils from "tns-core-modules/utils/utils";

    export default {
        mixins: [ sideDrawer ],
        data() {
            return {

            };
        }, 
        mounted() {
        },
        methods: {
            onTap(){
                utils.openUrl("mailto:contacto@donacion.com.ar");
            },
            onWeb(){
                utils.openUrl("https://www.donacion.ar");
            },
            onPhone(){
                utils.openUrl("tel:+5491131752908");
            },
            onWhat(){
                utils.openUrl("whatsapp://send?phone=+5491131752908");
            }
        }
    };
</script>

<style scoped lang="scss">
.nameclass{
    color:#fff;
    font-size:20;
}
.contacto{
    color:#fff;
    font-size:20;
}
</style>