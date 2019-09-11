
class Enterprise{

      static toGraphQL(data) {
        return `{
            enterprise_name: "${data.enterprise_name}", 
            description: "${data.description}", 
            email_enterprise: "${data.email_enterprise}", 
            facebook: "${data.facebook}",
            twitter: "${data.twitter}",  
            linkedin:"${data.linkedin}", 
            phone: "${data.phone}",
            own_enterprise: "${data.own_enterprise}",
            photo: "${data.photo}",
            value: "${data.value}",
            shares: "${data.shares}",
            share_price: "${data.share_price}",
            own_shares: "${data.own_shares}",
            city: "${data.city}",
            country: "${data.country}",
            type_id: ${data.type_id},
          }`;
      }
    
      static getAll() {
        return `{
            enterprise {
                id
                enterprise_name
                description
                email_enterprise
                facebook
                twitter
                linkedin
                phone
                own_enterprise
                photo
                value
                shares
                share_price
                own_shares
                city
                country
                enterprise_type {
                    name
                    id
                  }
              }
          }
          `;
      }

      static objectGraphQL() {
          return `
          id
          enterprise_name
          description
          email_enterprise
          facebook
          twitter
          linkedin
          phone
          own_enterprise
          photo
          value
          shares
          share_price
          own_shares
          city
          country
          enterprise_type {
              name
              id
            }`
      }

      static getAll() {
        return `{
            enterprise {
                ${this.objectGraphQL()}
              }
          }
          `;
      }

      static getByName(name) {
        return `{
            enterprise (where: {enterprise_name: {_ilike: "%${name}%"}}) {
                ${this.objectGraphQL()}
              }
          }
          `;
      }

      static getByType(type) {
        return `{
            enterprise (where: {type_id: {_eq: "${type}"}}) {
                ${this.objectGraphQL()}
              }
          }
          `;
      }
      static getByTypeName(type,name) {
        return `{
            enterprise (where: {enterprise_name: {_ilike: "${name}"}, type_id: {_eq: ${type}}}) {
                ${this.objectGraphQL()}
              }
          }
          `;
      }
     
      static getById(id) {
        return `{
            enterprise (where: {id: {_eq: "${id}"}}) {
                ${this.objectGraphQL()}
              }
          }
          `;
      }

      
    
     static insert(data) {
        return `mutation {
              insert_enterprise(objects: ${this.toGraphQL(data)}) {
                affected_rows
              }
            }`;
      }
    }

    module.exports={Enterprise};
    
