<template>
    <div class="w-full max-w-5xl mx-auto my-10">
        <h1 class="text-2xl text-gray-800 font-semibold capitalize mb-6">Alerts</h1>

        <success-pop></success-pop>
        <info-pop></info-pop>
        <warning-pop></warning-pop>
        <error-pop></error-pop>
        <notification-pop></notification-pop>
        <success-full-width></success-full-width>
        <info-full-width></info-full-width>
        <warning-full-width></warning-full-width>
        <error-full-width></error-full-width>
    </div>
</template>

<script>
import SuccessPop from "../ui/Alerts/SuccessPop";
import InfoPop from "../ui/Alerts/InfoPop";
import WarningPop from "../ui/Alerts/WarningPop";
import ErrorPop from "../ui/Alerts/ErrorPop";
import NotificationPop from "../ui/Alerts/NotificationPop";
import SuccessFullWidth from "../ui/Alerts/SuccessFullWidth";
import InfoFullWidth from "../ui/Alerts/InfoFullWidth";
import WarningFullWidth from "../ui/Alerts/WarningFullWidth";
import ErrorFullWidth from "../ui/Alerts/ErrorFullWidth";

export default {
    components: { 
        SuccessPop , 
        InfoPop , 
        WarningPop,
        ErrorPop,
        NotificationPop,
        SuccessFullWidth,
        InfoFullWidth,
        WarningFullWidth,
        ErrorFullWidth,
    },
};
</script>