
export class Util{

    public static FormatException(err: any, how){
        const m = {
            message: `Uma exceção ocorreu na classe: ${how.name}`,
            error: err.toString()
        }
        return m
    }
    
}