export interface Asset {
 grade: string;
 lastSeen: number;
 name: string;
 total_vuls: number;
 type: 'domain' | 'cloud' | 'ip';
 event?: React.MouseEvent<HTMLDivElement>;


}
export interface CloudData {
 ips: number;
 live: number[];
 monitored: number[];
 ports: number;
 total: number;
 total_live: number;
 total_monitored: number;
 vulns: number;
}

export interface DomainData {
 ips: number;
 live: number[];
 monitored: number[];
 ports: number;
 total: number;
 total_live: number;
 total_monitored: number;
 vulns: number;
}

export interface IpData {
 ips: number;
 live: number[];
 monitored: number[];
 ports: number;
 total: number;
 total_live: number;
 total_monitored: number;
 vulns: number;
}
export interface ServerData {
 assets: Asset[];
 cloud: CloudData;
 domain: DomainData;
 ip: IpData;
}