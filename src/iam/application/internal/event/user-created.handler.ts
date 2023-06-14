import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { User } from '../../../domain/model/aggregates/user.entity';
import { UserCreatedEvent } from '../../../domain/model/events/user-created.event';

@EventsHandler(UserCreatedEvent)
export class UserCreatedHandler implements IEventHandler<UserCreatedEvent> {
  handle(event: UserCreatedEvent): any {
    console.log('UserCreatedEvent: ${event}');
  }
}
