import connection from "./data/connection";

export const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("actor")
      .avg("salary as average")
      .where({ gender });
  
    return result[0].average;
  };