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
                    <Label text="Te presentamos donacion.ar, la nueva app para donar a todas las Instituciones desde tu celular! 
    Encontrá todas las comunidades del país, seleccioná la tuya y doná, así de simple!
    Para dar la tzedaká de todos los días, para hacer un aporte especial o hasta para pagar la cuota,... ahora podés hacerlo desde tu celular.
    Podés pagar con tarjeta de crédito o con Mercadopago.  El dinero se transfiere directamente a la cuenta de la Institución seleccionada.
    En donacion.ar tenemos la misión de ayudar a nuestras comunidades desde hace varios años llevando adelante exitosas campañas de recaudación de fondos. 
    Gracias a D's ya son cada vez mas las Instituciones que logran recaudar y cobrar sus cuotas por medio de nuestra web.   Por eso ahora lanzamos la nueva app para facilarselos y  facilitartelo a vos! 
    Tu comunidad te necesita!" class="nameclass " textWrap="true" flexGrow="true" marginLeft="5%" marginRight="5%" width="90%" marginTop="40" />
                    <Label text="Donacion.ar" class="nameclass " textWrap="true" flexGrow="true" marginLeft="15" marginTop="23" @tap="onPhone" />
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
            onPhone(){
                utils.openUrl("tel:005491144445555");
            }
        }
    };
</script>

<style scoped lang="scss">
.nameclass{
    color:#fff;
    font-size:20;
}
</style>