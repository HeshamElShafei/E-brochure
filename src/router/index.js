import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Information from '@/components/Information'
import InformationChild from '@/components/InformationChild'
import Locations from '@/components/Locations'
import Dubai from '@/components/Dubai'
import AbuDhabi from '@/components/AbuDhabi'
import Fujairah from '@/components/Fujairah'
import AlAin from '@/components/AlAin'
import RAK from '@/components/RAK'
import Oman from '@/components/Oman'
import AlBarshaClub from '@/components/AlBarshaClub'
import Membership from '@/components/Membership'
import Options from '@/components/Options'
import Registration from '@/components/Registration'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/Information',
    	name: Information,
    	component: Information,
    	children: [
    	{
    		path:'child',
    		component: InformationChild
    	}]
    },
    {
    	path: '/Locations',
    	name: Locations,
    	component: Locations
    },
    {
    	path: '/Dubai',
    	name: Dubai,
    	component: Dubai
    },
    {
    	path: '/AbuDhabi',
    	name: AbuDhabi,
    	component: AbuDhabi
    },
    {
    	path: '/Fujairah',
    	name: Fujairah,
    	component: Fujairah
    },
    {
    	path: '/AlAin',
    	name: AlAin,
    	component: AlAin
    },
    {
    	path: '/RAK',
    	name: RAK,
    	component: RAK
    },
    {
    	path: '/Oman',
    	name: Oman,
    	component: Oman
    },
    {
    	path: '/AlBarshaClub',
    	name: AlBarshaClub,
    	component: AlBarshaClub
    },
    {
    	path: '/Membership',
    	name: Membership,
    	component: Membership
    },
    {
    	path: '/Options',
    	name: Options,
    	component: Options
    }
    ,
    {
    	path: '/Registration',
    	name: Registration,
    	component: Registration
    }
  ]
})
