<template>
    <div :id="name | toId">
        <div class="flex w-full h-full justify-center items-center">
            <div class="flex flex-col w-2/5 h-auto justify-center items-center cursor-pointer">
                <div style="background-image: url(https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
                     class="flex bg-gray-300 h-32 md:h-56 w-24 md:w-4/5 mx-2 rounded-sm shadow-md bg-cover bg-top">
                </div>
                <div class="flex flex-col h-20 w-2/3 bg-white text-xs md:text-base -mt-10 text-center shadow-lg rounded-md justify-center items-center">
                    <span class="flex w-full h-10 justify-center items-center font-bold ">Nike Revolt</span>
                    <div class="flex flex-row w-full h-10 bg-gray-200 rounded-b-lg ">
                        <span class="flex w-1/3 h-full rounded-bl-lg justify-center items-center md:font-black md:text-lg"> $150 </span>
                        <div  class="flex w-2/3 h-full bg-indigo-700 rounded-br-lg text-white justify-center items-center ">Add to Cart</div>
                    </div>
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
