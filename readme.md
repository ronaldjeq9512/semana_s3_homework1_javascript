# Ejercicio

Información de una Persona
Requisitos:
 
    - Crear un objeto persona con propiedades básicas.
    - Acceder y mostrar propiedades del objeto.
    - Añadir un objeto anidado dentro de persona.
    - Agregar y eliminar propiedades del objeto.
    - Usar la destructuración para acceder a propiedades.
    - Congelar el objeto para evitar cambios.
    - Sellar el objeto para permitir modificaciones pero no agregar ni eliminar propiedades.
    - Unir dos objetos usando Object.assign y el operador spread.
    - Usar this dentro de un método del objeto.
    - Recorrer el objeto usando Object.keys, Object.values y Object.entries.
    - De ser posible usar funciones con parámetros y con devolución (return)

Para esto se realizó lo siguiente:

1. Se creó el objeto persona y se añadió los datos
``` js
const persona = {
    age: 28,
    name: 'Ronald',
    lastName: 'Estela Quintana',
    email: 'ronaldjeq@gmail.com'
}
```

2. Se crea un objeto anidado con una función usando this
``` js
const professsion = {
    ageOfExperience: 4,
    stacks: ['react', 'js', 'css'],
    enterprises:{
        encora: 'Software Engineer lll',
        directv: 'Full-stack Developer' 
    },
    getArrayEnterprises : function () {
        console.log('obteniedo array de empleos')
        getInfoWithKeysValuesAndEntries(this.enterprises)
    }
}
```

3. Se añade dicho objeto al objeto persona y se elimina la propiedad ageOfExperience
``` js
persona.profession = professsion;

delete persona.profession.ageOfExperience;
```

4. Se crearon funciones con object.freeze y object.seal y a la vez obtener los valores con destructuración
``` js

const getPrincipalObjectInfo = (objectInfo) => {
    console.log('Obteniendo los datos personales de la persona');
    const {age, name, lastName, email, phone} = objectInfo;
    console.log(`los datos de la persona son nombre y apellidos: ${name} ${lastName}, edad: ${age}, con email: ${email} y teléfono: ${phone}`)
}


const getInfoWithFreeze = () => {
    console.log('Iniciando cambio de propiedades con Freeze ...')
    const objectWithFreeze = {...persona}
    Object.freeze(objectWithFreeze)
    console.log('Eliminando la propiedad name ...')
    delete objectWithFreeze.name;
    console.log('Cambiando la propiedad age  a 14 ...')
    objectWithFreeze.age = 18
    console.log('Cambiando la propiedad phone  a 961235482 ...')
    objectWithFreeze.phone = 961235482
    return objectWithFreeze;
}

const getInfoWithSeal = () => {
    console.log('Iniciando cambio de propiedades con Seal ...')
    const objectWithSeal = {...persona}
    Object.seal(objectWithSeal)
    console.log('Eliminando la propiedad name ...')
    delete objectWithSeal.name;
    console.log('Cambiando la propiedad age  a 14 ...')
    objectWithSeal.age = 14
    console.log('Cambiando la propiedad phone  a 961235482 ...')
    objectWithSeal.phone = 961235482;
    return objectWithSeal;
}

const getInfoWithNewProperties = (type) => {
    console.log('Obteniendo valores con freez y seal')
    switch (type) {
        case 'freeze':return getInfoWithFreeze();
        case 'seal': return getInfoWithSeal();
        default: return undefined;
    }
}

const getInfoWithObjectProperties = () => {
    console.log('Obteniendo los datos personales de la persona usando Object.freeze y Object.seal');
    const objectFreeze = getInfoWithNewProperties('freeze');
    getPrincipalObjectInfo(objectFreeze)
    const objectSeal = getInfoWithNewProperties('seal');
    getPrincipalObjectInfo(objectSeal)
}
```

5. Se crearon funciones para recorrer y obtener los valores con object.keys, object.values y object.entries
``` js
const objectWithKeys = (objectInfo) => {
    console.log('Obteniendo arrary de keys')
    Object.keys(objectInfo).map((item, key)=> {
        console.log(`el key ${key} es ${item}`)
    })
}

const objectWithValues = (objectInfo) => {
    console.log('Obteniendo arrary de keys')
    Object.values(objectInfo).map((item, key)=> {
        console.log(`el valor ${key} es ${item}`)
    })
}

const objectWithEntrie = (objectInfo) => {
    console.log('Obteniendo arrary de keys')
    Object.entries(objectInfo).map((item)=> {
        console.log(`El key es ${item[0]} y el valor es ${item[1]}`)
    })
}

const getInfoWithKeysValuesAndEntries = (objectInfo) => {
    objectWithKeys(objectInfo)
    objectWithValues(objectInfo)
    objectWithEntrie(objectInfo)
}
```