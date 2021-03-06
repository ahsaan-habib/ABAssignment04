import { ServiceResult } from './service-result';
import {UsersPerm} from "./users-perm";

export interface UsersPermRes {
  serviceResult: ServiceResult;
  data: UsersPerm;
}
