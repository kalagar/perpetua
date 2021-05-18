export interface IRocket {
  links: {
    mission_patch?: string;
    mission_patch_small?: string;
  };
  mission_name: string;
  launch_date_utc: Date;
  launch_date_local: Date;
  launch_success: boolean;
  _id: string;
  flight_number: string;
  rocket: {
    rocket_name: string;
    rocket_type: string;
    fairings: {
      reused: boolean;
    };
  };
}
