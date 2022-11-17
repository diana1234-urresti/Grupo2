import { AuthenticationStrategy } from "@loopback/authentication";
import { service } from "@loopback/core";
import { Request, RedirectRoute, HttpErrors, JsonBodyParser } from "@loopback/rest";
import { UserProfile } from "@loopback/security";
import { ParamsDictionary } from "express-serve-static-core";
import parseBearerToken from "parse-bearer-token";
import { ParsedQs } from "qs";
import { AutenticacionService } from "../services";


export class EstrategiaAdministrador implements AuthenticationStrategy{
    name: string ="Administrador";

    constructor(
        @service(AutenticacionService)
        public servicionAutenticacion : AutenticacionService
    ){ }

    async authenticate(request: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>): Promise<UserProfile |  undefined> {
            let token = parseBearerToken(request);
                if (token){
                    let datos = this.servicionAutenticacion.ValidarTokenJWT(token);
                        if(datos){
                            let perfil: UserProfile = Object.assign({
                                nombre: datos
                            });
                            return perfil;             

                        }else{
                            throw new HttpErrors[401]("El token incluido no es válido.")
                        }

                }else{
                    throw new HttpErrors[401]("No se ha incluido un token en la solicitud.")
                }
        
    }
}