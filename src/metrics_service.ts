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

  public async writeOnProcessStarted(correlationId: string, processModelId: string): Promise<void> {
    await this.loggingRepository.writeLogForProcessModel(correlationId, processModelId, LogLevel.info, 'Process started');
  }

  public async writeOnProcessFinished(correlationId: string, processModelId: string): Promise<void> {
    await this.loggingRepository.writeLogForProcessModel(correlationId, processModelId, LogLevel.info, 'Process finished');
  }

  public async writeOnProcessError(correlationId: string, processModelId: string): Promise<void> {
    await this.loggingRepository.writeLogForProcessModel(correlationId, processModelId, LogLevel.info, 'Process Error');
  }

  public async writeOnFlowNodeInstanceEnter(correlationId: string, processModelId: string, flowNodeInstanceId: string): Promise<void> {
    await this.loggingRepository.writeLogForFlowNodeInstance(correlationId, processModelId, flowNodeInstanceId, LogLevel.info, 'FNI Entered');
  }

  public async writeOnFlowNodeInstanceExit(correlationId: string, processModelId: string, flowNodeInstanceId: string): Promise<void> {
    await this.loggingRepository.writeLogForFlowNodeInstance(correlationId, processModelId, flowNodeInstanceId, LogLevel.info, 'FNI Exited');
  }

  public async writeOnFlowNodeInstanceError(correlationId: string, processModelId: string, flowNodeInstanceId: string): Promise<void> {
    await this.loggingRepository.writeLogForFlowNodeInstance(correlationId, processModelId, flowNodeInstanceId, LogLevel.info, 'FNI Error');
  }

  public async writeOnFlowNodeInstanceSuspend(correlationId: string, processModelId: string, flowNodeInstanceId: string): Promise<void> {
    await this.loggingRepository.writeLogForFlowNodeInstance(correlationId, processModelId, flowNodeInstanceId, LogLevel.info, 'FNI Suspended');
  }

  public async writeOnFlowNodeInstanceResume(correlationId: string, processModelId: string, flowNodeInstanceId: string): Promise<void> {
    await this.loggingRepository.writeLogForFlowNodeInstance(correlationId, processModelId, flowNodeInstanceId, LogLevel.info, 'FNI Resumed');
  }
}
