


insertReligionData= function(){
	if(Religions.find().count()==0){
		//Insert Main religions
		Religions.insert(new Religion('Hinduism','main'));
		Religions.insert(new Religion('Buddhism','main'));
		Religions.insert(new Religion('Christianity','main'));
		Religions.insert(new Religion('Islam','main'));
		Religions.insert(new Religion('Jweism','main'));

		//insert sub sects


		//Hinduism
		Religions.insert(new Religion('Saivisim','Hinduism'));
		Religions.insert(new Religion('Shaktism','Hinduism'));
		Religions.insert(new Religion('Vaishnavism','Hinduism'));
		Religions.insert(new Religion('Smartism','Hinduism'));




	}}



