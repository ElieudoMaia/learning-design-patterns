import { Configuration } from './Configuration';

const config1 = Configuration.getInstance('config 1');
const config2 = Configuration.getInstance('config 2');

console.log('[Config 1]', config1); // config 1
console.log('[Config 2]', config2); // config 1

// O método getInstance sempre retornará a mesma instância
