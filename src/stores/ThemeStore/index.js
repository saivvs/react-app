import {observable,action,reaction,computed} from 'mobx';


class ThemeStore{
    
    @observable selectedTheme
    
    constructor(){
        this.selectedTheme = 'DARK';
    }
    
    
    @action.bound
    onChangeSelectedTheme(){
        
    }
}


const themeStore = new ThemeStore;
export default themeStore;