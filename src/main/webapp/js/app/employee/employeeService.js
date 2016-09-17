services.service('Employee', ['$resource','$http', function($resource,$http){
    console.log("from employee");
    var employee = {};

    // Os offices podem ser colocados no banco
    var typeOffices = [
    {id:'1',name:'Desenvolvedor Java'},
    {id:'2',name:'Desenvolvedor front end'},
    {id:'3',name:'Desenvolvedor banck-end'},
    {id:'4',name:'Desenvolvedor Node.js'},
    {id:'5',name:'Desenvolvedor FullStack'}
    ];

    // Os sectors podem ser colocados no bancos
    var sectors = [
    {id:'1',name:'Escritorio de inovacoes'},
    {id:'3',name:'Suporte'}
    ];

    var skills = [
    {id:'1',title:'Nodejs'},
    {id:'2',title:'PHP'},
    {id:'3',title:'JAVA'},
    {id:'4',title:'Angular.js'},
    {id:'4',title:'JQuery'},
    {id:'4',title:'Web Design'},
    {id:'4',title:'UX'},
    {id:'4',title:'CSS'}
    ];

var contacts = [
    {id:'1',title:'Telefone celular'},
    {id:'2',title:'Telefone fixo'},
    {id:'3',title:'Email'},
    {id:'4',title:'facebook'},
    {id:'5',title:'Linkedin'}
    ];
    
    return {

        getSkills:function() {
            return skills;
        },

        getOffices:function() {
            return typeOffices;  
        },

        getContacts:function() {
                               return contacts;
                           },

        getSectors:function() {
            return sectors;  
        },

        setEmployee:function(item){
          employee = item;
        },

        getEmployee:function(){
          return employee;
        },

        save:function(employee){
        console.log("Employee: " + JSON.stringify(employee));    
        return $http.post('rest/employees', employee);
        },

        all:function() {
        console.info("Called:Employee");
        return $http.get('rest/employees');
        },

        remove:function(employee) {
                console.info("Called:Employee remove: " + employee.id);
                return $http.delete('rest/employees' , {id:employee.id});
                }

};

}])