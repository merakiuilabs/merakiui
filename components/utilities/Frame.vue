<template>
    <iframe class="w-full h-full" frameborder="0" width="100%" height="100%" :srcdoc="doc"></iframe>
</template>

<script>
    export default {
        props: ['code'],

        computed: {
            doc: function () {
                return `<!DOCTYPE html>
                            <html class="w-full h-full" lang="en">
                            <head>
                                <meta charset="UTF-8">
                                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <title>Component</title>
                                <script src="https://cdn.tailwindcss.com"><\/script>
                            </head>
                            <body class="w-full h-full flex justify-center items-center">
                                ${this.code}
                            </body>
                        </html>`;
            }
        }
    }


</script>

<style>

    .area-full{
        width: 100%;
        height: 100%;
        border: 1px solid #d1d1d1;
    }

</style>