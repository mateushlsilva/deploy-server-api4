import { Router } from "express";
import { CommitteeControllers } from "../controllers";
const routes = Router();

routes.get('/especifico/:uuid', CommitteeControllers.getCommittee);
routes.get('/committeeAll', CommitteeControllers.getAllCommittee);
routes.get("/filterAll", CommitteeControllers.getCommitteeFilterAll);
routes.get("/filterAllStatus", CommitteeControllers.getCommitteeStatus);
routes.get("/archived", CommitteeControllers.getArchived);


routes.get("/comiRiskRtStatus", CommitteeControllers.getcomiRiskRt);
routes.get("/comiRiskCsoStatus", CommitteeControllers.getcomiRisCso);
routes.get("/comiImpactCtoStatus", CommitteeControllers.getcomiImpactCto); 
routes.get("/comiImpactHpStatus", CommitteeControllers.getcomiImpactHp); 
//routes.get("/comiCostSquadStatus", CommitteeControllers.getcomiCostSquad); 


routes.post('/createCommittee', CommitteeControllers.postCommittee);

routes.put('/impactCto/:uuid', CommitteeControllers.putCommitteeImpactCto);
routes.put('/impactHp/:uuid', CommitteeControllers.putCommitteeImpactHp)
//routes.put("/costSquad/:uuid", CommitteeControllers.putCommitCostSquad)
routes.put("/riskRt/:uuid", CommitteeControllers.putCommitRikRt)
routes.put("/riskCso/:uuid", CommitteeControllers.putCommitRiskCso)
routes.put("/alteraStatus/:uuid", CommitteeControllers.putStatus)
routes.delete("/deletar/:uuid", CommitteeControllers.deleteCommittee)

export default routes;