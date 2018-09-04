// let apiData={
//     site={title:"",address:"",city:"",state:"",zip:""},
//     date_collected={},
//     substance_ids={},
//     substances=[{abbreviation:"",title:""}],
//     date_collected_range_end={},
//     criteria={},
//     well_results={my_wells:{"MW1":{samples:[{date_collected:"",substances:{"sub_id":{free_product:"",value:"",criteria_values:{value:""}}}}]},"MW2":{samples:[{date_collected:"",substances:{"sub_id":{free_product:"",value:"",criteria_values:{value:""}}}}]},"MW3":{samples:[{date_collected:"",substances:{"sub_id":{free_product:"",value:"",criteria_values:{value:""}}}}]}},sorted_well_titles:["MW1","MW2","MW3"]}
// }

export const apiData = 
{
  "criteria": null, 
  "endDate": "2011-04-05", 
  "site": "132", 
  "startDate": "2010-04-21", 
  "substanceId": [
    1, 
    2, 
    3, 
    4, 
    8, 
    9, 
    40
  ], 
  "substances": [
    {
      "abbreviation": null, 
      "active": true, 
      "cas": "71-43-2", 
      "cas_sanitized": "71432", 
      "criteria": 0.0, 
      "field_data": false, 
      "hard_ref": 1, 
      "id": 1, 
      "precision": 1, 
      "sort": 1, 
      "substance_group_id": 1, 
      "title": "Benzene", 
      "unit": "ppb (ug/l)"
    }, 
    {
      "abbreviation": null, 
      "active": true, 
      "cas": "108883", 
      "cas_sanitized": "108883", 
      "criteria": 0.0, 
      "field_data": false, 
      "hard_ref": 1, 
      "id": 2, 
      "precision": 1, 
      "sort": 2, 
      "substance_group_id": 1, 
      "title": "Toluene", 
      "unit": "ppb (ug/l)"
    }, 
    {
      "abbreviation": null, 
      "active": true, 
      "cas": "100414", 
      "cas_sanitized": "100414", 
      "criteria": 0.0, 
      "field_data": false, 
      "hard_ref": 1, 
      "id": 3, 
      "precision": 1, 
      "sort": 3, 
      "substance_group_id": 1, 
      "title": "Ethylbenzene", 
      "unit": "ppb (ug/l)"
    }, 
    {
      "abbreviation": null, 
      "active": true, 
      "cas": "1330-20-7", 
      "cas_sanitized": "1330207", 
      "criteria": 0.0, 
      "field_data": false, 
      "hard_ref": 1, 
      "id": 4, 
      "precision": 1, 
      "sort": 4, 
      "substance_group_id": 1, 
      "title": "Xylene", 
      "unit": "ppb (ug/l)"
    }, 
    {
      "abbreviation": null, 
      "active": true, 
      "cas": "95636", 
      "cas_sanitized": "95636", 
      "criteria": 0.0, 
      "field_data": false, 
      "hard_ref": 0, 
      "id": 8, 
      "precision": 1, 
      "sort": 8, 
      "substance_group_id": 1, 
      "title": "1,2,4-Trimethylbenzene", 
      "unit": "ppb (ug/l)"
    }, 
    {
      "abbreviation": null, 
      "active": true, 
      "cas": "108678", 
      "cas_sanitized": "108678", 
      "criteria": 0.0, 
      "field_data": false, 
      "hard_ref": 0, 
      "id": 9, 
      "precision": 1, 
      "sort": 9, 
      "substance_group_id": 1, 
      "title": "1,3,5-Trimethylbenzene", 
      "unit": "ppb (ug/l)"
    }, 
    {
      "abbreviation": null, 
      "active": true, 
      "cas": "91203", 
      "cas_sanitized": "91203", 
      "criteria": 0.0, 
      "field_data": false, 
      "hard_ref": 0, 
      "id": 40, 
      "precision": 1, 
      "sort": 10, 
      "substance_group_id": 1, 
      "title": "Naphthalene", 
      "unit": "ppb (ug/l)"
    }
  ], 
  "wells": {
    "my_wells": {
      "MW-1": {
        "active": true, 
        "depth_to_bottom": 24.6, 
        "diameter": 2.0, 
        "est_depth_to_water": 21.0, 
        "frequency_id": null, 
        "id": 2417, 
        "latitude": 43.9003, 
        "longitude": -85.2578, 
        "material": "PVC", 
        "notes": "nan", 
        "purge_water_disposal": "Pour on ground", 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {}
          }
        ], 
        "sampletechnique": "Low Flow", 
        "screenlength": 5.0, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-1", 
        "top_of_casing": 1010.85, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-11": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2425, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": {"value":12}, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 3760.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 1870.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 9320.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 1490.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 429.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 332.0
              }
            }
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 2260.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 1600.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 7930.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 1450.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 366.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 411.0
              }
            }
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 1390.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 1410.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 5740.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 1400.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 442.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 299.0
              }
            }
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-11", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-13a": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2426, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 1350.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 1180.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 6060.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 1040.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 306.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }
            }
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 2410.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 1560.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 6180.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 1220.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 350.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 188.0
              }
            }
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 326.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 392.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 1950.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 382.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 111.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 107.0
              }
            }
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-13a", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-13b": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2427, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {}
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-13b", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-13c": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2428, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {}
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-13c", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-14": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2429, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {}
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-14", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-15": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2430, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }
            }
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {}
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-15", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-16": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2431, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }
            }
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {}
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-16", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-17": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2432, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 1.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 12.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 85.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 15.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 3.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }
            }
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 23.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 307.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 101.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 20.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 11.0
              }
            }
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 1.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 8.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 146.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 58.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 11.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 8.0
              }
            }
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-17", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-18": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2433, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }
            }
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {}
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-18", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-19R": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2434, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {}
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-19R", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-2": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2418, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }
            }
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }
            }
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-2", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-20": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2435, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {}
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-20", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-21": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2436, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }
            }
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }
            }
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }
            }
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-21", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-22": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2437, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }
            }
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }
            }
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }
            }
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-22", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-23a": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2438, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }
            }
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }
            }
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }
            }
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-23a", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-23b": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2439, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {}
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-23b", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-24a": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2440, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {}
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-24a", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-24b": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2441, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {}
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-24b", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-25a": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2442, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 5.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 96.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 29.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 85.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 2.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 5.0
              }
            }
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-25a", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-25b": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2443, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }
            }
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {}
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-25b", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-25c": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2444, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {}
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-25c", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-26": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2445, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }
            }
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }
            }
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-26", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-27": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2446, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {}
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-27", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-28": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2447, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 3.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 13.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 177.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 238.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 188.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 41.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 15.0
              }
            }
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 4.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 89.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 79.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 66.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 10.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }
            }
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 6.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 181.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 230.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 139.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 17.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 10.0
              }
            }
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-28", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-29a": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2448, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 327.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 766.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 216.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 49.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }
            }
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 17.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 4.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 9.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }
            }
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 5.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 221.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 482.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 167.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 38.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 17.0
              }
            }
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-29a", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-29b": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2449, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {}
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-29b", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-29c": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2450, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {}
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-29c", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-3": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2419, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {}
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-3", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-31": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2451, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }
            }
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }
            }
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }
            }
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-31", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-32": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2452, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {}
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-32", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-33": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2453, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {}
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-33", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-34": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2454, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {}
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-34", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-35": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2455, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }
            }
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {}
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-35", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-36": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2456, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {}
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-36", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-37": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2457, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {}
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-37", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-4": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2420, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {}
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-4", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-5": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2421, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 1.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 176.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 401.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 206.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 45.0
              }
            }
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 11.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 123.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 101.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }
            }
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 144.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 1110.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 255.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 126.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 26.0
              }
            }
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-5", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-6": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2422, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }
            }
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }
            }
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 52.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 111.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 303.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 49.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 35.0
              }
            }
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-6", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-7": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2423, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 254.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 654.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 3120.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 861.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 312.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 189.0
              }
            }
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 418.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 920.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 4820.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 1280.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 355.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 294.0
              }
            }
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 412.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 450.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 2910.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 881.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 295.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 158.0
              }
            }
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-7", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "MW-8": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2424, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 170.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 458.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 422.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 174.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 61.0
              }
            }
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 646.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 2020.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 1390.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 545.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 319.0
              }
            }
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 681.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 1140.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 1260.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 392.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 200.0
              }
            }
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "MW-8", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "PMW-2": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2458, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {}
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 61.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 1290.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 3810.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 1050.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 253.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 177.0
              }
            }
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 1120.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 1260.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 5058.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 985.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 239.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 83.0
              }
            }
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "PMW-2", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "PMW-3": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2459, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 2.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 232.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 2630.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 452.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 200.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 62.0
              }
            }
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 137.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 301.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 618.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 154.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 60.0
              }
            }
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 194.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 399.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 682.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 204.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 43.0
              }
            }
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "PMW-3", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }, 
      "PMW-4": {
        "active": true, 
        "depth_to_bottom": null, 
        "diameter": null, 
        "est_depth_to_water": null, 
        "frequency_id": null, 
        "id": 2460, 
        "latitude": null, 
        "longitude": null, 
        "material": null, 
        "notes": "Automatically created from Lab Data Upload", 
        "purge_water_disposal": null, 
        "samples": [
          {
            "date_collected": "Wed, 21 Apr 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 15.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 1.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }
            }
          }, 
          {
            "date_collected": "Thu, 21 Oct 2010 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 50.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 6.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }
            }
          }, 
          {
            "date_collected": "Tue, 05 Apr 2011 00:00:00 GMT", 
            "substances": {
              "1": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }, 
              "2": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 3.0
              }, 
              "3": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 5.0
              }, 
              "4": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 23.0
              }, 
              "8": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 6.0
              }, 
              "9": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 2.0
              }, 
              "40": {
                "criteria_values": null, 
                "free_product": false, 
                "less_than": 0.0, 
                "value": 0.0
              }
            }
          }
        ], 
        "sampletechnique": "", 
        "screenlength": null, 
        "site_id": 132, 
        "sort": 0, 
        "title": "PMW-4", 
        "top_of_casing": 0.0, 
        "xpos": 0, 
        "xpos_fields": 0, 
        "ypos": 0, 
        "ypos_fields": 0
      }
    }, 
    "num_sample_dates": 3, 
    "sorted_well_titles": [
      "MW-1", 
      "MW-2", 
      "MW-3", 
      "MW-4", 
      "MW-5", 
      "MW-6", 
      "MW-7", 
      "MW-8", 
      "MW-11", 
      "MW-13a", 
      "MW-13b", 
      "MW-13c", 
      "MW-14", 
      "MW-15", 
      "MW-16", 
      "MW-17", 
      "MW-18", 
      "MW-19R", 
      "MW-20", 
      "MW-21", 
      "MW-22", 
      "MW-23a", 
      "MW-23b", 
      "MW-24a", 
      "MW-24b", 
      "MW-25a", 
      "MW-25b", 
      "MW-25c", 
      "MW-26", 
      "MW-27", 
      "MW-28", 
      "MW-29a", 
      "MW-29b", 
      "MW-29c", 
      "MW-31", 
      "MW-32", 
      "MW-33", 
      "MW-34", 
      "MW-35", 
      "MW-36", 
      "MW-37", 
      "PMW-2", 
      "PMW-3", 
      "PMW-4"
    ]
  }
}
