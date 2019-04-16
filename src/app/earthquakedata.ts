export interface Dummy {
    data: any,
    id: string
}

export interface Property {
    alert: string,
    cid: number,
    code: string,
    detail: string,
    dmin: number,
    felt: number,
    gap: number,
    ids: string,
    mag: number,
    magType: string,
    mmi: number,
    net: string,
    nst: any,
    place: string,
    rms: number,
    sig: number,
    sources: string,
    status: string,
    time: number,
    title: string,
    tsunami: number,
    type: string,
    types: string,
    tz: number,
    updated: number,
    url: string
}

export interface Feature {
    geometry: {
        coordinates: number[];
        type: string;
    };
    id: string;
    properties: {
        alert: string; 
        cid: number;
        code: string;
        detail: string;
        dmin: number;
        felt: number;
        gap: number;
        ids: string;
        mag: number;
        magType: string;
        mmi: number;
        net: string;
        nst: any;
        place: string;
        rms: number;
        sig: number;
        sources: string;
        status: string;
        time: number;
        title: string;
        tsunami: number;
        type: string;
        types: string;
        tz: number;
        updated: number;
        url: string;
    };
    type: string;
}

export interface EarthquakeData {
    bbox: any;
    features: Feature[];
    metadata: any;
}
