import { LightningElement, track, wire, api } from 'lwc';

export default class OnboardingFlowTable extends LightningElement {

    @api records = [];
    @track columns = [{
        label: 'Onboarder Documents',
        fieldName: 'Name',
        type: 'text',
        sortable: true
    }];
    @track data;
    @track ukDocs = ['New Starter Information', 'Payment Details', 'Emergency Contact Information', 'Background Authorisation and Release', 'Background Authorisation and Release', 'Proof of ID', 'Proof of Address', 'EU/UK Visa/Passport'];
    @track usDocs = ['Form I-9', 'I-9 Worksheet', 'Withholding Tax - Massachusetts', 'Form W-4'];
    @track acmeDocs = ['Welcome Form', 'Emergency Contact Form', 'Proof of ID', 'Forklift Driver'];
    @track pageDocs = ['Welcome Form', 'Emergency Contact Form', 'Proof of ID', 'Welcome to PageGroup'];

    connectedCallback() {
        console.log(`Value of records: `, this.records);
        if(this.category){
            switch (this.category) {
                case 'UK':
                    this.data = this.ukDocs.map(x => {
                        return {Name: x}
                    });
                    break;
                case 'US':
                    this.data = this.usDocs.map(x => {
                        return {Name: x}
                    });
                case 'ACME':
                    this.data = this.acmeDocs.map(x => {
                        return {Name: x}
                    });
                case 'PageGroup':
                    this.data = this.pageDocs.map(x => {
                        return {Name: x}
                    });
                default:
                    break;
            }
            console.log(`Value of this.Data ===> `, this.data);
        }
    }
}