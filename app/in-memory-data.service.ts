import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let players = [
      {   league_id: 128,
        season_id: 2015,
        team_id: 3148,
        captain: 2,
        injury: 2,
        team_name: "Real Madrid FC",
        id: 1,
        name: "Cristiano Ronoldo",
        known_name: "CR7",
        position: 1,
        name_en: "Cristiano Ronoldo",
        known_name_en: "Cristiano Ronoldo",
        birth_date: "1985-02-05",
        age: 30,
        first_nationality: "República Portuguesa",
        weight: 80,
        height: 185,
        jersey_num: 7,
        real_position: 1,
        real_position_side: 0,
        join_date: "2009-06-01",
        country: "República Portuguesa",
        preferred_foot: 0,
        worth: 42.5,
        description: "description",
        image_86x120_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1598543517,3841718200&fm=58",
        image_130x180_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1598543517,3841718200&fm=58",
        market_value: 100,
        contract_until: "2015-09-01",
        detailed_position: "{\"main_position\":{\"type\":9},\"side_position\":[{\"type\":11},{\"type\":13}]}"        
    },
    {   league_id: 128,
        season_id: 2015,
        team_id: 3148,
        captain: 2,
        injury: 2,
        team_name: "Real Madrid FC",
        id: 2,
        name: "Gareth Bale",
        known_name: "Bale",
        position: 1,
        name_en: "Gareth Bale",
        known_name_en: "Bale",
        birth_date: "1989-07-16",
        age: 28,
        first_nationality: "Wales",
        weight: 78,
        height: 186,
        jersey_num: 11,
        real_position: 1,
        real_position_side: 0,
        join_date: "2013-09-02",
        country: "Wales",
        preferred_foot: 0,
        worth: 42.5,
        description: null,
        image_86x120_url: "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=531841382,1119281908&fm=58",
        image_130x180_url: "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=531841382,1119281908&fm=58",
        market_value: 100,
        contract_until: "20160901",
        detailed_position: "{\"main_position\":{\"type\":9},\"side_position\":[{\"type\":11},{\"type\":13}]}"        
    },
    {   league_id: 128,
        season_id: 2015,
        team_id: 3148,
        captain: 2,
        injury: 2,
        team_name: "Real Madrid FC",
        id: 3,
        name: "James Rodríguez",
        known_name: "CR7",
        position: 1,
        name_en: "Cristiano Ronoldo",
        known_name_en: "Cristiano Ronoldo",
        birth_date: "1985-02-05",
        age: 30,
        first_nationality: "República Portuguesa",
        weight: 80,
        height: 185,
        jersey_num: 7,
        real_position: 1,
        real_position_side: 0,
        join_date: "2009-06-01",
        country: "República Portuguesa",
        preferred_foot: 0,
        worth: 42.5,
        description: "description",
        image_86x120_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1598543517,3841718200&fm=58",
        image_130x180_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1598543517,3841718200&fm=58",
        market_value: 100,
        contract_until: "2015-09-01",
        detailed_position: "{\"main_position\":{\"type\":9},\"side_position\":[{\"type\":11},{\"type\":13}]}"        
    },
    {   league_id: 128,
        season_id: 2015,
        team_id: 3148,
        captain: 2,
        injury: 2,
        team_name: "Real Madrid FC",
        id: 4,
        name: "Benzema",
        known_name: "Bale",
        position: 1,
        name_en: "Gareth Bale",
        known_name_en: "Bale",
        birth_date: "1989-07-16",
        age: 28,
        first_nationality: "Wales",
        weight: 78,
        height: 186,
        jersey_num: 11,
        real_position: 1,
        real_position_side: 0,
        join_date: "2013-09-02",
        country: "Wales",
        preferred_foot: 0,
        worth: 42.5,
        description: null,
        image_86x120_url: "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=531841382,1119281908&fm=58",
        image_130x180_url: "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=531841382,1119281908&fm=58",
        market_value: 100,
        contract_until: "20160901",
        detailed_position: "{\"main_position\":{\"type\":9},\"side_position\":[{\"type\":11},{\"type\":13}]}"        
    },
    {   league_id: 128,
        season_id: 2015,
        team_id: 3148,
        captain: 2,
        injury: 2,
        team_name: "Real Madrid FC",
        id: 5,
        name: "Modric",
        known_name: "CR7",
        position: 1,
        name_en: "Cristiano Ronoldo",
        known_name_en: "Cristiano Ronoldo",
        birth_date: "1985-02-05",
        age: 30,
        first_nationality: "República Portuguesa",
        weight: 80,
        height: 185,
        jersey_num: 7,
        real_position: 1,
        real_position_side: 0,
        join_date: "2009-06-01",
        country: "República Portuguesa",
        preferred_foot: 0,
        worth: 42.5,
        description: "description",
        image_86x120_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1598543517,3841718200&fm=58",
        image_130x180_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1598543517,3841718200&fm=58",
        market_value: 100,
        contract_until: "2015-09-01",
        detailed_position: "{\"main_position\":{\"type\":9},\"side_position\":[{\"type\":11},{\"type\":13}]}"        
    },
    {   league_id: 128,
        season_id: 2015,
        team_id: 3148,
        captain: 2,
        injury: 2,
        team_name: "Real Madrid FC",
        id: 6,
        name: "Sergio Ramos",
        known_name: "Bale",
        position: 1,
        name_en: "Gareth Bale",
        known_name_en: "Bale",
        birth_date: "1989-07-16",
        age: 28,
        first_nationality: "Wales",
        weight: 78,
        height: 186,
        jersey_num: 11,
        real_position: 1,
        real_position_side: 0,
        join_date: "2013-09-02",
        country: "Wales",
        preferred_foot: 0,
        worth: 42.5,
        description: null,
        image_86x120_url: "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=531841382,1119281908&fm=58",
        image_130x180_url: "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=531841382,1119281908&fm=58",
        market_value: 100,
        contract_until: "20160901",
        detailed_position: "{\"main_position\":{\"type\":9},\"side_position\":[{\"type\":11},{\"type\":13}]}"        
    },
    {   league_id: 128,
        season_id: 2015,
        team_id: 3148,
        captain: 2,
        injury: 2,
        team_name: "Real Madrid FC",
        id: 7,
        name: "Alvaro Morata",
        known_name: "CR7",
        position: 1,
        name_en: "Cristiano Ronoldo",
        known_name_en: "Cristiano Ronoldo",
        birth_date: "1985-02-05",
        age: 30,
        first_nationality: "República Portuguesa",
        weight: 80,
        height: 185,
        jersey_num: 7,
        real_position: 1,
        real_position_side: 0,
        join_date: "2009-06-01",
        country: "República Portuguesa",
        preferred_foot: 0,
        worth: 42.5,
        description: "description",
        image_86x120_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1598543517,3841718200&fm=58",
        image_130x180_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1598543517,3841718200&fm=58",
        market_value: 100,
        contract_until: "2015-09-01",
        detailed_position: "{\"main_position\":{\"type\":9},\"side_position\":[{\"type\":11},{\"type\":13}]}"        
    },
    {   league_id: 128,
        season_id: 2015,
        team_id: 3148,
        captain: 2,
        injury: 2,
        team_name: "Real Madrid FC",
        id: 8,
        name: "Toni Kroos",
        known_name: "Bale",
        position: 1,
        name_en: "Gareth Bale",
        known_name_en: "Bale",
        birth_date: "1989-07-16",
        age: 28,
        first_nationality: "Wales",
        weight: 78,
        height: 186,
        jersey_num: 11,
        real_position: 1,
        real_position_side: 0,
        join_date: "2013-09-02",
        country: "Wales",
        preferred_foot: 0,
        worth: 42.5,
        description: null,
        image_86x120_url: "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=531841382,1119281908&fm=58",
        image_130x180_url: "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=531841382,1119281908&fm=58",
        market_value: 100,
        contract_until: "20160901",
        detailed_position: "{\"main_position\":{\"type\":9},\"side_position\":[{\"type\":11},{\"type\":13}]}"        
    },
    {   league_id: 128,
        season_id: 2015,
        team_id: 3148,
        captain: 2,
        injury: 2,
        team_name: "Real Madrid FC",
        id: 9,
        name: "Marcelo",
        known_name: "CR7",
        position: 1,
        name_en: "Cristiano Ronoldo",
        known_name_en: "Cristiano Ronoldo",
        birth_date: "1985-02-05",
        age: 30,
        first_nationality: "República Portuguesa",
        weight: 80,
        height: 185,
        jersey_num: 7,
        real_position: 1,
        real_position_side: 0,
        join_date: "2009-06-01",
        country: "República Portuguesa",
        preferred_foot: 0,
        worth: 42.5,
        description: "description",
        image_86x120_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1598543517,3841718200&fm=58",
        image_130x180_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1598543517,3841718200&fm=58",
        market_value: 100,
        contract_until: "2015-09-01",
        detailed_position: "{\"main_position\":{\"type\":9},\"side_position\":[{\"type\":11},{\"type\":13}]}"        
    },
    {   league_id: 128,
        season_id: 2015,
        team_id: 3148,
        captain: 2,
        injury: 2,
        team_name: "Real Madrid FC",
        id: 10,
        name: "Pepe",
        known_name: "Bale",
        position: 1,
        name_en: "Gareth Bale",
        known_name_en: "Bale",
        birth_date: "1989-07-16",
        age: 28,
        first_nationality: "Wales",
        weight: 78,
        height: 186,
        jersey_num: 11,
        real_position: 1,
        real_position_side: 0,
        join_date: "2013-09-02",
        country: "Wales",
        preferred_foot: 0,
        worth: 42.5,
        description: null,
        image_86x120_url: "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=531841382,1119281908&fm=58",
        image_130x180_url: "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=531841382,1119281908&fm=58",
        market_value: 100,
        contract_until: "20160901",
        detailed_position: "{\"main_position\":{\"type\":9},\"side_position\":[{\"type\":11},{\"type\":13}]}"        
    }
    ];
    return {players};
  }
}