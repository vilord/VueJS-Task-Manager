/**
 * @name TaskManager
 * @description VueJS task manager.
 * @version 0.2.0
 * @author Steven Morrison <steven@zaffri.com>
 */

// Vue and Main components
import Vue from 'vue';
import Modal from './components/Modal.vue';

// App Exports
import ModalConfig from './exports/ModalConfig.js';
import AppInput from './exports/AppInput.js';
import AppStorage from './exports/AppStorage.js';

// Main app instance
new Vue({
    el: "#app",
    lastNewTaskCategory: "",
    storageKey: "zaffri-vuejs-task-manager",
    data: {
        newCategory: '',
        modalConfig: {
            visible: false,
            type: "confirm",
            title: "Delete",
            messageBody: "Are you sure you want to delete this?",
            confirmText: "Confirm",
            cancelText: "Cancel",
            callbackData: {}
        },
        categories: []
    },
    created: function() {
        // Load app data
        var data = localStorage.getItem(this.storageKey);
        
        if(data != null && data != "") {
            this.categories = JSON.parse(data.trim());
        };
    },
    methods: {
        // AppStorage
        createCategory: AppStorage.createCategory,
        createTask: AppStorage.createTask,
        deleteCategory: AppStorage.deleteCategory,
        deleteTask: AppStorage.deleteTask,
        toggleCompletion: AppStorage.toggleCompletion,
        updateAppStorage: AppStorage.updateAppStorage,

        // AppInput
        showTaskInput: AppInput.showTaskInput,
        hideTaskInput: AppInput.hideTaskInput,

        // Modal Config
        showModal: ModalConfig.showModal,
        modalCallback: ModalConfig.modalCallback
    },
    components: { 'ZaffriModal': Modal }
});