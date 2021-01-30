<template>
    <view-component :name="name" :code="code">
        <div class="px-3 pt-6 pb-80" slot="component">
            <section class="max-w-md w-full mx-auto px-5 py-4 relative rounded-md">
                <div class="relative">
                    <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <svg class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </span>

                    <input type="text" v-model="keyword" class="pl-10 pr-4 py-3 w-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Type Something">
                </div>

                <div v-if="jobsSearch" class="absolute inset-x-0 mt-4 mx-5 px-6 py-3 max-h-72 overflow-y-auto bg-white dark:bg-gray-800 border border-gray-300 dark:border-transparent rounded-md">
                    <a v-for="job in jobsSearch" :key="job.title" href="#" class="block py-1">
                        <h3 class="text-gray-700 dark:text-gray-100 font-medium hover:underline" v-text="job.title"></h3>
                        <p class="mt-2 text-gray-500 dark:text-gray-400 text-sm" v-text="job.date"></p>
                    </a>
                </div>
            </section>
        </div>
    </view-component>
</template>

<script>
export default {
    data() {
        return {
            name: 'Search',
            keyword: '',
            jobs: [
                { 
                    title: 'Software engineer',
                    date: '02/04/2020'
                },
                { 
                    title: 'Front End Developer',
                    date: '01/03/2020'
                },
                { 
                    title: 'HR Lead',
                    date: '30/2/2020'
                },
                { 
                    title: 'Systems engineer',
                    date: '15/1/2020'
                },
                { 
                    title: 'Web Developer',
                    date: '02/04/2020'
                },
                { 
                    title: 'UI/UX',
                    date: '01/03/2020'
                },
                { 
                    title: 'Projects manager',
                    date: '30/2/2020'
                },
            ],
            code: `
        <section class="max-w-md w-full mx-auto px-5 py-4 relative rounded-md">
            <div class="relative">
                <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <svg class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </span>

                <input type="text" class="pl-10 pr-4 py-3 w-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Search">
            </div>

            <div class="absolute inset-x-0 mt-4 mx-5 px-6 py-3 max-h-72 overflow-y-auto bg-white dark:bg-gray-800 border border-gray-300 dark:border-transparent rounded-md">
                <a href="#" class="block py-1">
                    <h3 class="text-gray-700 dark:text-gray-100 font-medium hover:underline">Software engineer</h3>
                    <p class="mt-2 text-gray-500 dark:text-gray-400 text-sm">02/04/2020</p>
                </a>
            </div>
        </section>`
        }
    },

    computed: {
        jobsSearch() {
            if (this.keyword) {
                return this.jobs.filter((job) => {
                            return job.title.toLowerCase().includes(this.keyword);
                        });
            }

            return this.jobs;
        }
    }
}
</script>