import { observable, makeObservable, action } from 'mobx';
import axios from 'axios';
import { runInAction } from 'mobx';
class GlobalState {

    isLogin = false;
    business = {
        id: "123",
        name: "ori",
        address: "ben",
        phone: "05424",
        owner: "1",
        logo: "",
        description: "good",
    }
    services = [

       ];
    appointments = [
        ];
    setIsLogin = (val) => { this.isLogin = val }
   

    initBusiness = async () => {
        const response = await fetch("http://localhost:8787/businessData");
        const data = await response.json();
        console.log(this.business);
        console.log(this.business.id);

    }
    initServices = async () => {
        const response = await fetch("http://localhost:8787/services");
        const data = await response.json();
        this.setServices(data)
        console.log(this.services);
        console.log(this.services.id);
    }
    setServices(val) {
        this.service = val;
    }
    setBusiness(val) {
        this.business = val;
    }
    constructor() {
        makeObservable(this, {
            isLogin: observable,
            setIsLogin: action,
            business: observable,
            initBusiness: action,
            setBusiness: action,
            edit: observable,
            sentToEdit: action,
            isAdmin: observable,
            setIsAdmin: action,
            services: observable,
            addService: action,
            addAppointment: action,
            appointments: observable
          
        })
       

    }
   
   
    edit = false;
    sentToEdit = (val) => {
        this.edit = val;
    }

    addService = (val) => {
        this.services.push(val);
    }
    addAppointment = (val) => {
        this.appointments.push(val);
    }
    isAdmin = false;
    setIsAdmin = (val) => {
        this.isAdmin = val;
    }


}
export default new GlobalState();