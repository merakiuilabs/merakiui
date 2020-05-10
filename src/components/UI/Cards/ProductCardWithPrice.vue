<template>
    <div :id="name | toId">
        <div class="flex flex-col max-w-sm mx-auto h-full justify-center items-center">
           
                <div style="background-image: url(https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
                     class="flex bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-top">
                </div>
                <div class="flex flex-col h-20 w-48 md:w-64 bg-white -mt-10 text-sm shadow-lg rounded-lg justify-center items-center">
                    <div class="flex w-full h-10 justify-center items-center font-bold uppercase tracking-wide">Nike Revolt</div>
                    <div class="flex items-center justify-between w-full h-10 px-3 bg-gray-200 rounded-b-lg">
                        <h1 class="text-gray-800 font-bold ">$129</h1>
                        <button class=" bg-gray-700 text-xs text-white px-2 py-1 font-semibold rounded ">Add to cart</button>
                    </div>
                </div>
            
        </div>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Product Card with Price',
            }
        }
    }
</script>
