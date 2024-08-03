export interface AsyncThunkConfig {
 rejectValue: any;
 rejectWithValue: any
}


export interface Location {
 country: string;
 region: string;
 timezone: string;
 city: string;
 lat: string;
 lng: string;
}

export interface As {
 asn: number;
 name: string;
 route: string;
 domain: string;
 type: string;
}

export interface ResponseTypes {
 ip: string;
 location: Location;
 as: As;
 isp: string;
}
