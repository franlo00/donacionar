<template>
    <Page>
        <ActionBar :title="member.name">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
        </ActionBar>
        <ScrollView android:layout_height="match_parent">
            <GridLayout rows="auto,auto" class="gridlay">
                <ActivityIndicator busy="true" class="cv" ref="loadingw" :visibility="isItemVisible ? 'collapsed' : 'visible'" marginTop="50" marginBottom="50" color="white" />
                <WebViewExt :src="member.form" col="0" row="1" @loadFinished="onWebViewLoaded" :visibility="isItemVisible ? 'visible' : 'collapsed'" ref="wbv" @shouldOverrideUrlLoading="lde" supportZoom="false" viewPortSize="false" debugMode="true" android:layout_height="wrap_content" ></WebViewExt>
            </GridLayout>
        </ScrollView>
    </Page>
</template>

<script>
import WebViewExt  from "@nota/nativescript-webview-ext/vue";
import * as utils from "tns-core-modules/utils/utils";
//import webViewModule from '@nota/nativescript-webview-ext/vue'
    export default {  
        props: ["member"],
        data(e) {
            return {
                isItemVisible:false,
                nonewitem:false
            };
        },
        methods: {
            lde: function(webargs) {  
                if(webargs.url.includes("tel:") || webargs.url.includes("whatsapp") || webargs.url.includes("mailto:")){
                    webargs.cancel = true;    
                    utils.openUrl(webargs.url);
                }
            },
            onWebViewLoaded: function(webargs) {  
               const page = webargs.object.page;
                const vm = page.bindingContext;
                const webview = webargs.object;
                //console.log(webview);
                 /*webview.on(webview.loadStartedEvent, (args) => {
                    console.log(args.url)
                        if(args.url.includes("tel:")){
                            webview.stopLoading();
                            utils.openUrl(args.url);
                        }
                    });
                    webview.on(webview.WebViewExt.shouldOverrideUrlLoadingEvent, (_args) => {
                        let blocked_url = _args.url;
                        console.log(blocked_url)   ;
                        // Disable loading native app
                        //_args.cancel = true;         


                        // Do some stuff and load another url..
                    });*/
                setTimeout(() => {
                    this.isItemVisible = true;
                }, 2000);
            }
        }
    };
</script>

<style>
    .nameclass { 
        font-size: 18;
        vertical-align: center;
        text-align: center;
        width: 100%;
    }

    .cv-lbl {
        color:#0dc5c1;
        /*height: 100;
        width: 100;
        background-color: #ffe9b0;*/
    }

    .inner-circle {
        height: 100;
        width: 100;
        background-color: #0dc5c1;
        border-radius: 50%;
        top: 50;
        left: 50;
    }



    @keyframes rotate {
        from { transform: rotate(0deg); }
        to {transform: rotate(360deg); }
    }
</style> 