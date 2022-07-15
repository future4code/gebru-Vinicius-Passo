export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }

  export class Residence extends Place {
    constructor(
      private dwellersQuantity: number,
      // Refere-se ao número de moradores da casa
  
      cep: string
    ) {
      super(cep);
    }

    public getDwellersQuantity() : number {
      return this.dwellersQuantity
    }
  }

  export class Commerce extends Place {
    constructor(
      private floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
  
      cep: string
    ) {
      super(cep);
    }
    public getDwellersQuantity() : number {
      return this.floorsQuantity
    }
  }

  export class Industry extends Place {
    constructor(
      protected machinesQuantity: number,
      // Refere-se à quantidade de máquinas do local
  
      cep: string
    ) {
      super(cep);
    }
  
    public getMachinesQuantity(): number {
      return this.machinesQuantity;
    }
  }