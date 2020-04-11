import { observable} from 'mobx';

const mode={
        light: {
            id: '0',
            name: '#fff',
                backgroundColor: '#fff',
                color: 'black'
        },
        dark: {
            id: '1',
            name: '#2b3945',
                backgroundColor: '#2b3945',
                color: 'white'
        }
    };

class ThemeStore{
    @observable selectedTheme
    
    constructor(){
        this.selectedTheme=mode.light;
    }
    updateTheme(){
        if(this.selectedTheme===mode.light){
            this.selectedTheme = mode.dark;
        }
        else{
            this.selectedTheme = mode.light;
        }
    }
}
const themeStore = new ThemeStore();
export default themeStore;