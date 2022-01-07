export default [
  // Completed: Submachine Guns, Sniper Rifles, Launchers, Marksman Rifles, and Handguns
  // TODO: Add correct requirements for Assault Rifles, Shotguns, and Light Machine Guns

  {
    name: 'Pack Tactics',
    requirements: {
      atomic: {
        'Assault Rifles': { default: 'Get 400 Eliminations' },
        'Handguns': { default: 'Get 400 Eliminations' },
        'Launchers': {
          default: 'Get 100 Eliminations',
          'MK11 Launcher': 'Get 200 Eliminations' 
        },
        'Light Machine Guns': { default: 'Get 400 Eliminations' },
        'Marksman Rifles': { default: 'Get 400 Eliminations' },
        'Melee': { default: 'Get 50 Eliminations' },
        'Shotguns': { default: 'Get 400 Eliminations' },
        'Sniper Rifles': { default: 'Get 400 Eliminations' },
        'Submachine Guns': { default: 'Get 400 Eliminations' }
      },
      aether: {
        'Assault Rifles': { default: 'In Zombies, get 4000 Eliminations' },
        'Handguns': { default: 'In Zombies, get 4000 Eliminations' },
        'Launchers': { default: 'In Zombies, get 2500 Eliminations' },
        'Light Machine Guns': { default: 'In Zombies, get 4000 Eliminations' },
        'Marksman Rifles': { default: 'In Zombies, get 4000 Eliminations' },
        'Melee': { default: 'In Zombies, Get 1000 Eliminations' },
        'Shotguns': { default: 'In Zombies, get 4000 Eliminations' },
        'Sniper Rifles': { default: 'In Zombies, get 4000 Eliminations' },
        'Submachine Guns': { default: 'In Zombies, get 4000 Eliminations' }
      }
    }
  },
  {
    name: 'Surgical',
    requirements: {
      atomic: {
        'Assault Rifles': { default: 'Get 100 Headshots' },
        'Handguns': { default: 'Get 100 Headshots' },
        'Launchers': { default: 'Destroy 100 Enemy Killstreaks, Equipment or Field Upgrades' },
        'Light Machine Guns': { default: 'Get 100 Headshots' },
        'Marksman Rifles': { default: 'Get 100 Headshots' },
        'Melee': { default: 'Get 50 Backstabber Kills' },
        'Shotguns': { default: 'Get 100 Headshots' },
        'Sniper Rifles': { default: 'Get 100 Headshots' },
        'Submachine Guns': { default: 'Get 100 Headshots' }
      },
      aether: {
        'Assault Rifles': { default: 'In Zombies, get 800 Critical Kills' },
        'Handguns': { default: 'In Zombies, get 800 Critical Kills' },
        'Launchers': { default: 'In Zombies, In Zombies, get 10 rapid Kills 50 times' },
        'Light Machine Guns': { default: 'In Zombies, get 800 Critical Kills' },
        'Marksman Rifles': { default: 'In Zombies, get 800 Critical Kills' },
        'Melee': { default: 'In Zombies, In Zombies, get 10 rapid Kills 50 times' },
        'Shotguns': { default: 'In Zombies, get 800 Critical Kills' },
        'Sniper Rifles': { default: 'In Zombies, get 800 Critical Kills' },
        'Submachine Guns': { default: 'In Zombies, get 800 Critical Kills' }
      }
    }
  },
  {
    name: 'Predatory Ambition',
    requirements: {
      atomic: {
        'Assault Rifles': { default: 'Get 50 MultiKills' },
        'Handguns': { default: 'Get 50 MultiKills' },
        'Launchers': {
          default: 'Destroy 50 Ground Killstreaks or Field Upgrades',
          'MK11 Launcher': 'Get 50 Longshot Kills' 
        },
        'Light Machine Guns': { default: 'Get 50 MultiKills' },
        'Marksman Rifles': { default: 'Get 50 MultiKills' },
        'Melee': { default: 'Get 30 Slide Kills' },
        'Shotguns': { default: 'Get 50 MultiKills' },
        'Sniper Rifles': { default: 'Get 50 MultiKills' },
        'Submachine Guns': { default: 'Get 50 MultiKills' }
      },
      aether: {
        'Assault Rifles': { default: 'In Zombies, get 4000 Pack-a-Punched Eliminations' },
        'Handguns': { default: 'In Zombies, get 4000 Pack-a-Punched Eliminations' },
        'Launchers': { default: 'In Zombies, get 2500 Pack-a-Punched Eliminations' },
        'Light Machine Guns': { default: 'In Zombies, get 4000 Pack-a-Punched Eliminations' },
        'Marksman Rifles': { default: 'In Zombies, get 4000 Pack-a-Punched Eliminations' },
        'Melee': { default: 'In Zombies, get 1000 Pack-a-Punched Eliminations' },
        'Shotguns': { default: 'In Zombies, get 4000 Pack-a-Punched Eliminations' },
        'Sniper Rifles': { default: 'In Zombies, get 4000 Pack-a-Punched Eliminations' },
        'Submachine Guns': { default: 'In Zombies, get 4000 Pack-a-Punched Eliminations' }
      }
    }
  },
  {
    name: 'Reptilian',
    requirements: {
      atomic: {
        'Assault Rifles': { default: 'Get 5 Kills Without Dying 30 Times' },
        'Handguns': { default: 'Get 5 Kills Without Dying 30 Times' },
        'Launchers': {
          default: 'Destroy 50 Enemy Aerial Killstreaks',
          'Panzerfaust': 'Get 50 Longshot Kills',
          'MK11 Launcher': 'Get 50 Double Kills' 
        },
        'Light Machine Guns': { default: 'Get 5 Kills Without Dying 30 Times' },
        'Marksman Rifles': { default: 'Get 5 Kills Without Dying 30 Times' },
        'Melee': { default: 'Get 30 Double Kills' },
        'Shotguns': { default: 'Get 5 Kills Without Dying 30 Times' },
        'Sniper Rifles': { 
          default: 'Get 5 Kills Without Dying 30 Times',
          '3-Line Rifle': 'Get 100 Prone Kills' 
        },
        'Submachine Guns': { default: 'Get 5 Kills Without Dying 30 Times' }
      },
      aether: {
        'Assault Rifles': { default: 'In Zombies, get 10 rapid Kills 50 times' },
        'Handguns': { default: 'In Zombies, get 10 rapid Kills 50 times' },
        'Launchers': { default: 'In Zombies, kill 5 or more enemies with a single shot 50 times' },
        'Light Machine Guns': { default: 'In Zombies, get 10 rapid Kills 50 times' },
        'Marksman Rifles': { default: 'In Zombies, get 10 rapid Kills 50 times' },
        'Melee': { default: 'In Zombies, get 20 or more consecutive Kills without getting hit 20 times' },
        'Shotguns': { default: 'In Zombies, get 10 rapid Kills 50 times' },
        'Sniper Rifles': { default: 'In Zombies, get 10 rapid Kills 50 times' },
        'Submachine Guns': { default: 'In Zombies, get 10 rapid Kills 50 times' }
      }
    }
  },
  {
    name: 'Deadeye',
    requirements: {
      atomic: {
        'Assault Rifles': { default: 'Get 100 Long Range Kills' },
        'Handguns': { default: 'Get 100 Long Range Kills' },
        'Launchers': { 
          default: 'Destroy 3 Enemy Killstreaks in 1 Game 30 Times',
          'MK11 Launcher': 'Get 50 Triple Kills' 
        },
        'Light Machine Guns': { default: 'Get 100 Long Range Kills' },
        'Marksman Rifles': { default: 'Get 100 Long Range Kills' },
        'Melee': { default: 'Get 30 Kills While Enemy is Stunned or Flashed' },
        'Shotguns': { default: 'Get 100 Long Range Kills' },
        'Sniper Rifles': { default: 'Get 100 Long Range Kills' },
        'Submachine Guns': { default: 'Get 100 Long Range Kills' }
      },
      aether: {
        'Assault Rifles': { default: 'In Zombies, get 2000 Eliminations as a result of an equipped Covenant' },
        'Handguns': { default: 'In Zombies, get 2000 Eliminations as a result of an equipped Covenant' },
        'Launchers': { default: 'In Zombies, In Zombies, get 20 Sturmkrieger Eliminations' },
        'Light Machine Guns': { default: 'In Zombies, get 2000 Eliminations as a result of an equipped Covenant' },
        'Marksman Rifles': { default: 'In Zombies, get 2000 Eliminations as a result of an equipped Covenant' },
        'Melee': { default: 'In Zombies, In Zombies, get 20 Sturmkrieger Eliminations' },
        'Shotguns': { default: 'In Zombies, get 2000 Eliminations as a result of an equipped Covenant' },
        'Sniper Rifles': { default: 'In Zombies, get 2000 Eliminations as a result of an equipped Covenant' },
        'Submachine Guns': { default: 'In Zombies, get 2000 Eliminations as a result of an equipped Covenant' }
      }
    }
  },
  {
    name: 'Berserker',
    requirements: {
      atomic: {
        'Assault Rifles': { default: 'Get 100 Close Range Kills' },
        'Handguns': { default: 'Get 100 Close Range Kills' },
        'Light Machine Guns': { default: 'Get 100 Close Range Kills' },
        'Marksman Rifles': { default: 'Get 100 Close Range Kills' },
        'Shotguns': { default: 'Get 100 Close Range Kills' },
        'Sniper Rifles': { default: 'Get 100 Close Range Kills' },
        'Submachine Guns': { default: 'Get 100 Close Range Kills' }
      },
      aether: {
        'Assault Rifles': { default: 'In Zombies, get 100 Boom-Schreier Eliminations' },
        'Handguns': { default: 'In Zombies, get 100 Boom-Schreier Eliminations' },
        'Light Machine Guns': { default: 'In Zombies, get 100 Boom-Schreier Eliminations' },
        'Marksman Rifles': { default: 'In Zombies, get 100 Boom-Schreier Eliminations' },
        'Shotguns': { default: 'In Zombies, get 100 Boom-Schreier Eliminations' },
        'Sniper Rifles': { default: 'In Zombies, get 100 Boom-Schreier Eliminations' },
        'Submachine Guns': { default: 'In Zombies, get 100 Boom-Schreier Eliminations' }
      }
    }
  },
  {
    name: 'Wildcat',
    requirements: {
      atomic: {
        'Assault Rifles': { default: 'Get 250 Eliminations with 10 Attachments Equipped' },
        'Handguns': { default: 'Get 50 Kills After Recently Swapping to Your Primary or Secondary Weapon' },
        'Light Machine Guns': { default: 'Get 100 Bullet Penetration Kills' },
        'Marksman Rifles': { default: 'Get 50 Quick Scope Kills' },
        'Shotguns': { default: 'Get 100 One Shot Kills' },
        'Sniper Rifles': { default: 'Get 50 Kills While Holding You Breath' },
        'Submachine Guns': { default: 'Get 100 Hipfire Kills' }
      },
      aether: {
        'Assault Rifles': { default: 'In Zombies, get 20 Sturmkrieger Eliminations' },
        'Handguns': { default: 'In Zombies, get 20 Sturmkrieger Eliminations' },
        'Light Machine Guns': { default: 'In Zombies, get 20 Sturmkrieger Eliminations' },
        'Marksman Rifles': { default: 'In Zombies, get 20 Sturmkrieger Eliminations' },
        'Shotguns': { default: 'In Zombies, get 20 Sturmkrieger Eliminations' },
        'Sniper Rifles': { default: 'In Zombies, get 20 Sturmkrieger Eliminations' },
        'Submachine Guns': { default: 'In Zombies, get 20 Sturmkrieger Eliminations' }
      }
    }
  },
  {
    name: 'Survivalist',
    requirements: {
      atomic: {
        'Assault Rifles': {
          default: 'Get 100 Kills with Certain Attachments Equipped',
          'STG44': 'Get 100 ADS Kills with the Krausnick 220mm Rapid Barrel, 7.62 Gorenko 30 Round Mags, and VDD 27 Precision Stock Equipped',
          'Bar': 'Get 100 Longshot Kills with the CGC 30" XL Barrel, Pistol Grip Custom Stock, and Discard Proficiency Equipped',
          'AS44': 'Get 100 Hipfire Kills with the Empress 400mm Barrel, .30 Russian Short 60 Round Mags, and Steady Proficiency Equipped',
          'Automaton': 'Get 100 Kills While Moving with the 6.5mm Sakura 45 Round Mags, ZAC Skeletal Stock, and Spotter Proficiency Equipped',
          'Itra Burst': 'Get 100 Hipfire Kills with the Imerito 180mm 02BI Barrel, 8mm Klauser 12 Round Fast Mags, and Botti SSI Skeletal Equipped',
          'NZ-41': 'Get 100 Headshots with the Orbweaver 360mm BC Barrel, LOR MK3 SC Stock, and Defender Kit Equipped',
          'Volkssturmgewehr': 'Get 100 ADS Kills with the VDD 287mm Barrel, 8mm Kurz 20 Round Fast Mags, and ???' ,
          'Cooper Carbine': 'Get 100 ADS Kills with the 22" Cooper Custom Barrel, Cooper Custom Padded Stock, and Hardscope Proficiency Equipped'
        },
        'Handguns': {
          default: 'Get 50 Kills with Certain Attachments Equipped',
          'Ratt': 'Get 50 ADS Kills with the ZAC 98mm Barrel, 9mm 6 Round Fast Mags, and Lightweight Trigger Equipped',
          '1911': 'Get 50 ADS Kills with the Gracey Short No. #2 Barrel, .30 Russian Short 8 Round Mags, and Steady Trigger Equipped',
          'Klauser': 'Get 50 ADS Kills with the Fitzherbert 200mm BL Barrel, .45 ACP 8 Round Mags, and Steady Trigger Equipped',
          'Machine Pistol': 'Get 50 ADS Kills with the Burst-Fire Conversion Barrel, 7.62 Gorenko 40 Round Mags, and Steady Trigger Equipped',
          'Top Break': 'Get 50 Kills Without Taking Damage from that Enemy with the Wilkie W-4 Stub Barrel, .30 Russian Short Mags, and Hair Trigger Equipped' 
        },
        'Light Machine Guns': { default: 'Get 100 Kills with Certain Attachments Equipped' },
        'Marksman Rifles': {
          default: 'Get 100 Kills with Certain Attachments Equipped',
          'M1 Garand': 'Get 100 ADS Kills with the Cooper 25" Custom Barrel, CGC G2 Thumbhole Stock, and .303 8 Round Mags Equipped',
          'SVT-40': 'Get 100 Headshots with the .303 British 10 Round Mags, Kovalevskaya S02 Weighted Stock, and Focus Proficiency Equipped',
          'G-43': 'Get 100 ADS Kills with the .30-06 10 Round Mags, ZP MS02 Custom Stock, and Quickscope Proficiency Equipped' 
        },
        'Shotguns': {
          default: 'Get 100 Kills with Certain Attachments Equipped',
          'Combat Shotgun': 'Get 100 ADS Kills with the Chariot 16" Short Barrel, 12 Gauge 5 Round Tube Mags, and CGC 2M Wire Stock Equipped',
          'Gracey Auto': 'Get 100 Hipfire Kills with the CGC 22" Rapid Barrel, 12 Gauge 7 Round Mags, and Chariot Sport Stock Equipped',
          'Einhorn Revolving': 'Get 50 Kills Without Taking Damage from that Enemy with the Sawed-Off Barrel, 16 Gauge 7 Round Cylinder Mags, and Reisdorf Folding Stock Equipped'
        },
        'Sniper Rifles': {
          default: 'Get 100 Kills with Certain Attachments Equipped',
          'Kar98k': 'Get 100 Kills Without Taking Damage from that Enemy with the Krausnick Scout Barrel, 6.5mm Sakura 5 Round Mags, and the Unmarked Proficiency Equipped',
          'Type 99': 'Get 100 Longshot Kills with the Shiraishi 712mm Sniper Barrel, Shiraishi Precision Stock, and Spotter Proficiency Equipped',
          '3-Line Rifle': 'Get 100 Longshot Kills with the 270mm Voz Carbine Barrel, .30-06 20 Round Mags, and Kovalevskaya S01 Stock Equipped' ,
          'Gorenko Anti-Tank Rifle': 'Get 100 Kills After Recently Aiming Down Sights with the 420mm Empress Barrel, ZAC Custom Precision Stock, and Discard Proficiency Equipped'
        },
        'Submachine Guns': {
          default: 'Get 100 Kills with Certain Attachments Equipped',
          'MP-40': 'Get 100 Longshot Kills with the Krausnick 317mm 04B Barrel, 8mm Kurz 32 Round Mags, and VDD 34M Padded Stock Equipped',
          'M1928': 'Get 100 Kills Without Taking Damage from that Enemy with the Chariot 2.5" Rapid Barrel, CGC Wire Grip Stock, and Disable Proficiency Equipped',
          'Type 100': 'Get 100 Longshot Kills with the Warubachi 134mm Rapid Barrel, 8mm Kurz 40 Round Drums Mags, and Shiraichi T100 Stock Equipped',
          'PPSh-41': 'Get 100 Kills Without Taking Damage from that Enemy with the 8mm Nambu Round Mags, Empress S12P Stock, and Tiger Grip Proficiency Equipped',
          'Sten': 'Get 100 ADS KIils with the Hockenson 248mm Burst Barrel, .45 ACP 20 Round Fast Mags, and Gawain Custom Stock Equipped',
          'Owen Gun': 'Get 100 Hipfire Kills While Moving with the 9mm 72 Round Mags, LOR Folding Stock, and Steady Proficiency Equipped' 
        }
      },
      aether: {
        'Assault Rifles': { default: 'In Zombies, get 2000 Eliminations with 7 Attachments Equipped' },
        'Handguns': { default: 'In Zombies, get 2000 Eliminations with 7 Attachments Equipped' },
        'Light Machine Guns': { default: 'In Zombies, get 2000 Eliminations with 7 Attachments Equipped' },
        'Marksman Rifles': { default: 'In Zombies, get 2000 Eliminations with 7 Attachments Equipped' },
        'Shotguns': { default: 'In Zombies, get 2000 Eliminations with 7 Attachments Equipped' },
        'Sniper Rifles': { default: 'In Zombies, get 2000 Eliminations with 7 Attachments Equipped' },
        'Submachine Guns': { default: 'In Zombies, get 2000 Eliminations with 7 Attachments Equipped' }
      }
    }
  },
  {
    name: 'Mindgames',
    requirements: {
      atomic: {
        'Assault Rifles': {
          default: 'Get 100 Kills with Certain Attachments Equipped',
          'STG44': 'Get 100 Headshots with the Krausnick 620mm Precision Barrel, .30 Russian Short 30 Round Mags, and Vital Proficiency Equipped',
          'Bar': 'Get 100 Bullet Pen Kills with the .50 BMG 20 Round Mags. Cooper SP Stock, and Driller Proficiency Equipped',
          'AS44': 'Get 100 ADS Kills with the ZAC 650mm Precision Barrel, 7.62x54mmR 30 Round Mags, and ZAC 12A Stock Equipped',
          'Automaton': 'Get 100 ADS Kills with the Anastasia Sniper Barrel, Empress Broadsword Stock, and Assassin Proficiency Equipped (Bugged)',
          'Itra Burst': 'Get 100 ADS Kills with the Perfetto 140mm Rapida Barrel, Botti SMI Adjustable Stock, and Surveil Proficiency Equipped',
          'NZ-41': 'Get 100 ADS Kills with the Ravenwood 480mm NO.2 Barrel, .303 British 20 Round Fast Mags, Acrobatic Proficiency Equipped',
          'Volkssturmgewehr': 'Get 100 Kills While Moving with the 8mm Kurz 60 Round Drums Mags, SA Converted Stock, and Gung-Ho Proficiency Equipped',
          'Cooper Carbine': 'Get 100 Headshots with the 18" Ragdoll G45 Barrel, 9mm 60 Round Drum Mags, and Vital Proficiency Equipped'
        },
        'Handguns': {
          default: 'Get 50 Kills with Certain Attachments Equipped',
          'Ratt': 'Get 50 Kills Without Taking Damage from that Enemy with the Empress 129mm B03TT Barrel, 7.62 Gorenko 9 Round Mags, and Heavy Trigger Equipped',
          '1911': 'Get 50 Kills Without Taking Damage from that Enemy with the Cooper Full-Auto Barrel, .45 ACP 18 Round Mags, and Steady Trigger Equipped',
          'Klauser': 'Get 50 Headshots with the Fitzherbert 200mm BL Barrel, 9mm 12 Round Mags, and Heavy Trigger Equipped',
          'Machine Pistol': 'Get 50 Hipfire Kills with the VDD 140mm HE Barrel, 9mm 20 Round Mags, and Hair Trigger Equipped',
          'Top Break': 'Get 50 ADS Kills with the W-7 Barrel, .30 Russian Short Mags, and Steady Trigger Equipped' 
        },
        'Light Machine Guns': { default: 'Get 100 Kills with Certain Attachments Equipped' },
        'Marksman Rifles': {
          default: 'Get 100 Kills with Certain Attachments Equipped',
          'M1 Garand': 'Get 100 Kills While Crouched or Prone with the 6.5 Sakura 16 Round Drum Mags, Chariot S1 Stock Equipped',
          'SVT-40': 'Get 100 Kills Without Taking Damage from that Enemy with the Kovalevskaya 800mm B03 Barrel, Empress Crown Stock, and Vital Proficiency Equipped',
          'G-43': 'Get 100 Kills Without Taking Damage from that Enemy with the Wyvern 570mm Full-Auto Barrel, ZP Padded Stock, and Tight Grip Proficiency Equipped' 
        },
        'Shotguns': {
          default: 'Get 100 Kills with Certain Attachments Equipped',
           'Combat Shotgun': 'Get 100 Hipfire While Moving with the Framble No. 3 Barrel, CGC 3M Adjustable Stock, and Steady Proficiency Equipped',
           'Einhorn Revolving': 'Get 100 ADS Kills with the Klauser 710mm 02B Barrel, 12 Gauge S Round Cylinder Mags, and Wreck Proficiency Equipped' 
        },
        'Sniper Rifles': {
          default: 'Get 100 Kills with Certain Attachments Equipped',
          'Kar98k': 'Get 100 ADS Kills with the Krausnick 560mm LWS03K Barrel, 8mm Klauser 3 Round Mags, and Reisdorf Wire Stock Equipped',
          'Type 99': 'Get 100 Headshots with the 8mm Klauser 5 Round Mags, Removed Stock, and Vital Proficiency Equipped',
          '3-Line Rifle': 'Get 100 ADS Kills with the .303 British 5 Round Mags, MN Custom Stock, and Shrouded Proficiency Equipped' ,
          'Gorenko Anti-Tank Rifle': 'Get 100 Kills while Moving with the 240mm ZAC Rapid Barrel, 13mm AM 7 Round Mags, and Anastasia Type 3B Stoyat Stock Equipped'
        },
        'Submachine Guns': {
          default: 'Get 100 Kills with Certain Attachments Equipped',
          'MP-40': 'Get 100 Kills Without Taking Damage from that Enemy with the VDD 285mm Shrouded Barrel, 7.62 Gorenko 32 Round Mags, and Unmarked Proficiency Equipped',
          'M1928': 'Get 100 Kills While Crouched or Prone with the CGC 12" Cooling Barrel, 8mm Kurz 50 Round Drums Mags, and Chariot SI Stock Equipped',
          'Type 100': 'Get 100 Kills While Crouched or Prone with the Shiraishi 374mm Barrel, Shiraishi Weighted Stock, and Acrobatic Proficiency Equipped',
          'PPSh-41': 'Get 100 ADS Kills with the ZAC 300mm Barrel, .30 Russian Short 35 Round Mags, and Disable Proficiency Equipped',
          'Sten': 'Get 100 Kills While Moving with the 7.62 Gorenko 32 Round Mags, Gawain Para Stock, and Steady Proficiency Equipped',
          'Owen Gun': 'Get 100 ADS Kills with the Hockenson 305mm Precision Barrel, 9mm 20 Round Mags, and Acrobatic Proficiency Equipped' 
        }
      },
      aether: {
        'Assault Rifles': { default: 'In Zombies, get 3 or more rapid Critical Kills 30 times' },
        'Handguns': { default: 'In Zombies, get 3 or more rapid Critical Kills 30 times' },
        'Light Machine Guns': { default: 'In Zombies, get 3 or more rapid Critical Kills 30 times' },
        'Marksman Rifles': { default: 'In Zombies, get 3 or more rapid Critical Kills 30 times' },
        'Shotguns': { default: 'In Zombies, get 3 or more rapid Critical Kills 30 times' },
        'Sniper Rifles': { default: 'In Zombies, get 3 or more rapid Critical Kills 30 times' },
        'Submachine Guns': { default: 'In Zombies, get 3 or more rapid Critical Kills 30 times' }
      }
    }
  },
  {
    name: 'Death Artist',
    requirements: {
      atomic: {
        'Assault Rifles': {
          default: 'Get 100 Kills with Certain Attachments Equipped',
          'STG44': 'Get 100 Kills While Moving with the .30 Russian Short 20 Round Mags, Konstanz Tactical Stock, and Pressure Equipped',
          'Bar': 'Get 100 Kills While Moving with the Cooper 21" Scythe Barrel, 8mm Klauser 20 Round Mags, and Acrobatic Proficiency Equipped',
          'AS44': 'Get 100 Kills While Moving with the Empress Falchion A Barrel, Kovalevskaya Custom Stock, and Disable Proficiency Equipped',
          'Automaton': 'Get 100 Longshot Kills with the Zac 600mm BFA Barrel, 6.5MM Sakura 75 Round Drums Mags, and Anastasia Padded Stock Equipped',
          'Itra Burst': 'Get 100 Quickscope Kills with the 6.5mm Sakura 20 Round Mags, Botti DII Grip Stock, and Quickscope Proficiency Equipped',
          'NZ-41': 'Get 100 Kills Without Taking Damage from that Enemy with the Orbweaver Custom Barrel, 8mm Klauser 30 Round Mags, and Orbweaver Folding Stock Equipped',
          'Volkssturmgewehr': 'Get 100 Kills Without Taking Damage from that Enemy with the Krausnick 428mm 05V Barrel, 7.62 Gorenko 30 Round Mags, and Perfectionist Proficiency Equipped',
          'Cooper Carbine': 'Get 100 Close Range Kills with the 8" Ragdoll Short Barrel, .30 Carbine 20 Round Mags, and Cooper 45RS Stock'
        },
        'Handguns': {
          default: 'Get 50 Kills with Certain Attachments Equipped',
          'Ratt': 'Get 50 ADS Kills with the ZAC 98mm Barrel, .45 ACP 9 Round Mags, and Hair Trigger Equipped',
          '1911': 'Get 50 ADS Kills with the Gracey Short No. #2 Barrel, .45 ACP 5 Round Fast Mags, and Lightweight Trigger Equipped',
          'Klauser': 'Get 50 ADS Kills with the Wyvern 170mm 29L Barrel, .45 ACP 12 Round Mags, and Lightweight Trigger Equipped',
          'Machine Pistol': 'Get 50 ADS Kills with the VDD 35mm Short Barrel, 8mm Nambu 20 Round Mags, and Lightweight Trigger Equipped',
          'Top Break': 'Get 50 Kills Without Taking Damage from that Enemy with the W-7 Barrel, 9mm Mags, and Heavy Trigger Equipped' 
        },
        'Light Machine Guns': { default: 'Get 100 Kills with Certain Attachments Equipped' },
        'Marksman Rifles': {
          default: 'Get 100 Kills with Certain Attachments Equipped',
          'M1 Garand': 'Get 100 Longshot Kills with the Cooper 25" Custom Barrel, .30-06 12 Round Mags, and Acquisition Proficiency Equipped',
          'SVT-40': 'Get 100 Kills Without Taking Damage from that Enemy with the Kovalevskaya Custom Barrel, 6.5 Sakura 15 Round Mags, and Perfectionist Proficiency Equipped',
          'G-43': 'Get 100 ADS Kills with the Wyvern Burst Barrel, 8mm Klauser 20 Round Mags, and Fitzherbert Reinforced Stock Equipped' 
        },
        'Shotguns': {
          default: 'Get 100 Kills with Certain Attachments Equipped',
          'Combat Shotgun': 'Get 100 Headshots with the Framble 18" Precision Barrel, 16 Gauge 10 Round Drums Mags, and Vital Proficiency Equipped',
          'Gracey Auto': 'Get 100 ADS Kills with the Sawed-Off Barrel, CGC H4 Stock, and Frenzy Proficiency Equipped',
          'Double Barrel': 'Get 100 ADS Kills with the Sawed-Off Barrel, Fast Loading 12 Gauge Mags, and Panic Proficiency Equippeds',
          'Einhorn Revolving': 'Get 100 Hipfire Kills While Moving with the Birdshot 5 Round Cylinder Mags, VDD Hunter Stock, and Gung-ho Proficiency Equipped'
        },
        'Sniper Rifles': {
          default: 'Get 100 Kills with Certain Attachments Equipped',
          'Kar98k': 'Get 100 Longshot Kills with the VDD 660mm 05HE Barrel, VDD Thumbhole Stock, and Shrouded Proficiency Equipped',
          'Type 99': 'Get 100 ADS Kills with the Sakura 776mm Barrel, 6.5mm Sakura 3 Round Fast Mags, and Sakura CVR Custom Stock Equipped',
          '3-Line Rifle': 'Get 100 Headshots with the 500mm MN Custom Barrel, .30-06 20 Round Mags, and Hardscope Proficiency Equipped',
          'Gorenko Anti-Tank Rifle': 'Get 100 Kills While Crouched or Prone with the 440mm Anastasia Custom Barrel, 13mm AM 10 Round Mags, and Kovalevskaya Type 2 Padded Stock Equipped'
        },
        'Submachine Guns': {
          default: 'Get 100 Kills with Certain Attachments Equipped',
          'MP-40': 'Get 100 Headshots with the VDD 189mm Short Barrel, VDD 34M Stock, and Steady Proficiency Equipped',
          'M1928': 'Get 100 ADS Kills with the .45 ACP 30 Round Fast Mags, Chariot Marksman Stock, and Steady Proficiency Equipped',
          'Type 100': 'Get 100 Hipfire Kills While Moving with the 8mm Nambu 20 Round Mags, Sakura Type 2 Stock, and Fleet Proficiency Equipped',
          'PPSh-41': 'Get 100 ADS Kills with the Kovalevskaya 230mm BO3P Barrel, 7.62mm Gorenko 71 Round Mags, and ZAC Folding Stock Equipped',
          'Sten': 'Get 100 Headshots with the Hockenson 348mm B13S Barrel, 9mm 20 Round Mags. and Steady Proficiency Equipped',
          'Owen Gun': 'Get 100 Close Range Kills with the Gawain 188mm Shrouded Barrel, Gawain H4 Folding Stock, and Wreck Proficiency Equipped' 
        }
      },
      aether: {
        'Assault Rifles': { default: 'In Zombies, get 20 or more consecutive Kills without getting hit 20 times' },
        'Handguns': { default: 'In Zombies, get 20 or more consecutive Kills without getting hit 20 times' },
        'Light Machine Guns': { default: 'In Zombies, get 20 or more consecutive Kills without getting hit 20 times' },
        'Marksman Rifles': { default: 'In Zombies, get 20 or more consecutive Kills without getting hit 20 times' },
        'Shotguns': { default: 'In Zombies, get 20 or more consecutive Kills without getting hit 20 times' },
        'Sniper Rifles': { default: 'In Zombies, get 20 or more consecutive Kills without getting hit 20 times' },
        'Submachine Guns': { default: 'In Zombies, get 20 or more consecutive Kills without getting hit 20 times' }
      }
    }
  },
]
