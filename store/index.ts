import { defineStore } from "pinia";

import {countries, countriesNoStates, tourneys, events} from "~/data";
// import { Handler } from "~/services/api.handle";
// import { useSnFetch } from "~/composables/snFetch";

// const handler = new Handler();
export const useStore = defineStore({
    id: "main",
    state: () => ({
        loading: true,
        navigation: [
            { name: "Name", href: "/auth/register", icon: 'name' },
            { name: "School", href: "/auth/register/school", icon:  'school' }/* ,
            { name: "Bio&info", href: "/auth/register/bio-info", icon:  'bio-info' },
            { name: "Image", href: "/auth/register/image", icon:  'image' },
            { name: "Confirm", href: "/auth/register/confirm", icon: 'confirm' }, */
        ],
        pageContent: [
            {
                route: "/auth/login",
                title: "Login to your ScoutSity Account",
                subTitle: "Connect with  peers and like-minds",
            },
            {
                route: "/auth/register",
                title: "Create a new look",
                subTitle:
                    "A Look is an account on ScoutSity. When someone creates a Look, that person becomes a Sitizen of ScoutSity. Use the progress bar to navigate between steps.",
            },
            {
                route: "/auth/register/school",
                title: "Create a new look",
                subTitle:
                    "A school represents any institution where you received a formal education. It could be a high school, a college, a university, a polytechnic,an academy, etc.",
            }/* ,
            {
                route: "/auth/register/bio-info",
                title: "Create a new look",
                subTitle:
                    "What would you like people to know about you? This information would enable you connect with others and have a better experience on the platform",
            },
            {
                route: "/auth/register/image",
                title: "Create a new look",
                subTitle:
                    "The alignment of the backdrop and the profile picture is a representation of how your profile would look like.",
            },
            {
                route: "/auth/register/confirm",
                title: "Create a new look",
                subTitle:
                    "Cross check to make sure all the details are how you’d want them to be. Use the progress bar in navigating back to previous steps to make any changes. Welcome to ScoutSity!",
            }, */
        ],
        countries: countries,
        countryCodes: countriesNoStates,
        tourneys: tourneys,
        events: events,
    }),
    actions: {
        /*async callApi(payload) {
            await handler
                .handle(useSnFetch().users[`${payload?.route}`], {
                    data: payload.data,
                })
                .then((res) => {
                    this[`${payload?.state}`] = res;
                })
                .catch((e) => e);
        },*/
        /* async fetchCountries(){
            const { data} = await useFetch('/api/countries')
            console.log('data is', data)
        } */
    },
    getters: {
        eventsToday(state){
            return state.events.filter(event => {
                return event.date === "Dec 04, 2023"
            })
        },
        eventsAnticipated(state){
            return state.events.filter(event => {
                return event.date !== "Dec 04, 2023"
            })
        }
    },
    persist: true,
});
