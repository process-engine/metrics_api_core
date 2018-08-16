import {ILoggingRepository, LogLevel} from '@process-engine/logging_api_contracts';
import {IMetricsService} from '@process-engine/metrics_api_contracts';

export class MetricsService implements IMetricsService {

  private _loggingRepository: ILoggingRepository;

  constructor(loggingRepository: ILoggingRepository) {
    this._loggingRepository = loggingRepository;
  }

  private get loggingRepository(): ILoggingRepository {
    return this._loggingRepository;
  }

  public async writeOnProcessStarted(processModeldId: string, correlationId: string): Promise<void> {
    await this.loggingRepository.writeLogForProcessModel(processModeldId, correlationId, LogLevel.info, 'Process started');
  }

  public async writeOnProcessFinished(processModeldId: string, correlationId: string): Promise<void> {
    await this.loggingRepository.writeLogForProcessModel(processModeldId, correlationId, LogLevel.info, 'Process finished');
  }

  public async writeOnProcessError(processModeldId: string, correlationId: string): Promise<void> {
    await this.loggingRepository.writeLogForProcessModel(processModeldId, correlationId, LogLevel.info, 'Process Error');
  }

  public async writeOnEnter(processModeldId: string, correlationId: string, flowNodeInstanceId: string): Promise<void> {
    await this.loggingRepository.writeLogForFlowNodeInstance(processModeldId, correlationId, flowNodeInstanceId, LogLevel.info, 'FNI Entered');
  }

  public async writeOnExit(processModeldId: string, correlationId: string, flowNodeInstanceId: string): Promise<void> {
    await this.loggingRepository.writeLogForFlowNodeInstance(processModeldId, correlationId, flowNodeInstanceId, LogLevel.info, 'FNI Exited');
  }

  public async writeOnError(processModeldId: string, correlationId: string, flowNodeInstanceId: string): Promise<void> {
    await this.loggingRepository.writeLogForFlowNodeInstance(processModeldId, correlationId, flowNodeInstanceId, LogLevel.info, 'FNI Error');
  }

  public async writeOnSuspend(processModeldId: string, correlationId: string, flowNodeInstanceId: string): Promise<void> {
    await this.loggingRepository.writeLogForFlowNodeInstance(processModeldId, correlationId, flowNodeInstanceId, LogLevel.info, 'FNI Suspended');
  }

  public async writeOnResume(processModeldId: string, correlationId: string, flowNodeInstanceId: string): Promise<void> {
    await this.loggingRepository.writeLogForFlowNodeInstance(processModeldId, correlationId, flowNodeInstanceId, LogLevel.info, 'FNI Resumed');
  }
}
