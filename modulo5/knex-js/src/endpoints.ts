import connection from "./data/connection";

export const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("actor")
      .avg("salary as average")
     .groupBy(gender)
  
    return result[0].average;
  };

  export const actorSpecific = async (id: string) => {
    const result = await connection("actor").select().where({id})
    return result
  }