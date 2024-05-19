
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

const persona = {
    age: 28,
    name: 'Ronald',
    lastName: 'Estela Quintana',
    email: 'ronaldjeq@gmail.com'
}


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

persona.profession = professsion;

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

function initCode() {
    getInfoWithObjectProperties()
    persona.profession.getArrayEnterprises()
}

initCode()
