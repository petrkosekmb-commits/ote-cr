import test from 'node:test';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const script=fileURLToPath(new URL('../plugins/ote-cr/skills/ote-vykazy/scripts/calculate.mjs',import.meta.url));
const base=['--actual-production=1000','--actual-export=800','--forecast-production=0','--forecast-export=0'];
test('missing numbers and unknown options fail without results',()=>{
 for(const args of [[...base,'--actual-production= '],[...base,'--actual-tehc=100']]){
  const result=spawnSync(process.execPath,[script,...args],{encoding:'utf8'});
  assert.equal(result.status,1);assert.equal(result.stdout,'');
 }
});
test('explicit technology consumption contributes to reserve',()=>{
 const result=spawnSync(process.execPath,[script,...base,'--actual-tech=100'],{encoding:'utf8'});
 assert.equal(result.status,0);assert.equal(JSON.parse(result.stdout).reserve_kwh,80);
});
