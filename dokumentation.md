# **Dokumentation for "Landrup Dans"**

***Pernille Lang, WU11.***

***Github URL:*** https://github.com/CMK-WU11/svendepr-ve-euv-PernilleLang 

***Adgang, f.eks.:*** Brugernavn: "user1" - Adgangskode: "1234"  


# **Teknologi stack**
 ***Next.js*** Jeg har bugt Next.js, som er et React framework. Jeg har derfor alt det gode fra React, men Next.js er mere dynamisk, samt giver mig mulighed for nem fil og mappe routing. React ville også have været et godt bud, men med alle Next.js’s indbyggede features (som Images og Links tags, not-found.js og routes) så er Next.js bare lige dét bedre.   

***Tailwind CSS, samt https://tailwindcss.com/docs/installation*** Jeg har brugt Tailwind til styling, da dette giver en hurtigere styling og dermed er mere brugervenligt for programmøren. Tailwind er nemt og simpelt, og det gør at jeg f.eks. er fri for at bygge klasses i CSS og så fører dem ind i hver enkelt element, komponent og/eller route. Tailwind giver mig et bedre overblik, så jeg ikke skal bladrer igennem mange sider og huske en masse class og id navne.  

***React Icons (https://react-icons.github.io/react-icons/)*** React Icons er super nemt at anvende, biblioteket skal blot installeres også har man nem og hurtig adgang til et helt bibliotek af gratis ikoner. Jeg kunne også her have valgt Fontawesome, som jeg tidligere har benyttet, men React Icons har langt flere tilgengængelige ikoner. Hos Fontawesome går man tit forgæves og ikonerne er ikke altid gratis.  

***Zod, formvalidering (https://zod.dev/?id=installation)*** Jeg har hentet ZOD som bibliotek til validering af formularer, da dette er nemt at anvende og valideringen giver en mere simpel formvalidering og kode. Zod er forholdsvist nemt og giver en god validering, det gør koden mere DRY og simpel. Alternativet kunne f.eks. være at programmøren skulle hardcode (lave sin kode med Javascript). 
 

# ***Tredjepartskode*** 
***Til animeret knap: https://www.geeksforgeeks.org/how-to-add-keyframes-to-a-tailwind-css-config-file/*** Siden her gav mig stor hjælp til at benytte keyframes til styling af min knap på forsiden. De fleste andre sider gav mig ikke så stor hjælp som denne her gjorde. 

***Til import af fonts: https://www.itzami.com/blog/how-to-add-a-google-font-to-your-gatsby-tailwind-project*** Jeg har benyttet denne side til stor inspration af hvordan jeg importer fonts til styling og benyttelse med projektet her. Jeg bladrede igennem flere sider, men denne her gav mig størst forståelse for det.


# ***Eksempel på noget kode fra min opgave, med noter***

***Et eksempel fra min kode***
<!-- Image er et indbygget komponent, som gør at Next js er mere dynamisk og hurtigt. Endnu en grund til at vælge Next js. Dette er bl.a. også en af grundende til at Next js er så brugervenligt og hurtigt for programmøren at benytte. 

I denne kode henter jeg billedet via en api fetch i min source (src). Billedet får også height og width som en slags billede opløsning. Det samme gælder med Link, som med Image, og det giver også en hurtig routing imellem siderne på hjemmesiden. 

Navigation er en burgermenu/overlay menu jeg har bygget og lavet som en komponent. 

Alt under className er styling.

```javascript
 <Image src={details.asset.url} width={500} height={500} alt="classimage"   className="absolute h-[100%] w-[100%] object-cover"/>
    <div className="relative pt-[5em] pl-[2em] pr-[2em] flex justify-between">
        <Link href="/home">
            <p className="flex text-[#F4A88E]"><BiSolidLeftArrow className="fill-[#F4A88E]" size="15px"/>Back</p>
        </Link>
        <Navigation/>
    </div>
``` -->


# ***Argumentation for ændringer***
***Knap på forsiden*** Jeg har valgt at lave denne knap bouncende. Jeg syntes det gør siden mere aktiv og sjov, samt det fanger brugerens opmærksomhed og signalerer at knappen kan (og skal) bruges. Særligt omkring opmærksomhed ved knappen så syntes ja at dette mere brugervenligt for personer med synsnedsættelse.

***Resultater på søgefelt*** Jeg har valgt at lave metoden her om. I opgavebeskrivelsen står der "Listen over resultater vises kun, efter en bruger har skrevet noget i søgefeltet." Jeg finder det personligt mere dynamisk og brugervenligt at resultaterne vises løbende når man skriver i input feltet.

# ***Skalering af fremtiden***
***Fremtiden for mit projekt*** Mit projekt er lavet i mobilefirst, og derfor er det lige klar til at tilgå til at lave til iPad størrelse og fuld hjemmeside oplevelse. Herefter ville mit projekt nemt kunne udgives på Vercel, da jeg har lavet mit projekt i Next.js. Vercel er lavet af Next.js, og derfor er det lavet til at performe derefter.
  

# ***Fremhævelse***
Accessibility og SEO, er noget jeg går op i, så derfor er det vigtigt for mig at fremhæve netop dette fra min opgave.
Lige præcist mit søgefelt har udfordret mig både kodemæssigt, men også omkring performance og accessibility. Jeg har forsøgt mig frem med flere forskellige farveskaler og forsøg. Teksten blev lavet hvid, så sort også tilbage til hvid. Herefter gennemgik jeg det samme med mit input felt. Som det ser ud nu, står det helt sikkert bedst - Men med plads til forbedringer, som jeg ikke havde tid til at gå dybere ind i under svendeprøven. Problemet er mere specifikt billederne da de ikke står helt skarpt i "ratio" (altså billede forhold / format), og derfor påvirker dette lighthouse testen "Best Practis". Alle mine sidder lægger generelt på 100% - eller lige under - i accesibility og SEO (Search Engine optimization). 

<img src="./public/eksempel.jpg" style="width:450px; height:auto;">