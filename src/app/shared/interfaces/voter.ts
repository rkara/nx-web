export interface Voter {
    id: string;
    status: string;
    city: string;
    countyNumber: string;
    countyName: string;
    firstName: string;
    lastName: string;
    partyAffiliation: string;
    residentialAddress: string;
    residentialCity: string;
    residentialCountry: string;
    residentialPostalCode: string;
    residentialSecondaryAddress: string;
    residentialState: string;
    residentialZip: string;
}

export interface VoterQuery {
    status?: string;
    state?: string;
    city?: string;
    countyNumber?: string;
    firstName?: string;
    lastName?: string;
    partyAffiliation?: string;
}