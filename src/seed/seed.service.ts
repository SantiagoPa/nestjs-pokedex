import { Injectable } from '@nestjs/common';
import { IPokeResponse } from './interfaces/poke-response.interface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';



@Injectable()
export class SeedService {

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,

    private readonly http: AxiosAdapter,
  ) { }

  async runSeed() {
    await this.pokemonModel.deleteMany({});
    const data = await this.http.get<IPokeResponse>("https://pokeapi.co/api/v2/pokemon?limit=650");

    const pokemonToInsert: { name: string; no: number }[] = data.results.map(({ name, url }) => {
      const segments = url.split("/");
      const no: number = +segments.at(-2);
      return { name, no };
    });

    await this.pokemonModel.insertMany(pokemonToInsert)

    return "Seed Execute";
  }

}
