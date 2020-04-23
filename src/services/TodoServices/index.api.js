import { create } from 'apisauce';
import { networkCallWithApisauce } from '../../utils/APIUtils';
import { apiMethods } from '../../constants/APIConstants';

class TodoService{
    
    api
    
    constructor(){
        this.api = create({
            
            baseURL : 'https://jsonplaceholder.typicode.com'
            
        });
    }
    
    
    getTodosAPI(){
        
        const todosPromise = networkCallWithApisauce(
                this.api,
                '/todos/',
                {},
                apiMethods.get,
            );
            console.log('services',todosPromise);
            return todosPromise;
    }
}

export default TodoService;