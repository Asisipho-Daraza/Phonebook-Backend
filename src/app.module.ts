import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PhonebookModule } from './phonebook/phonebook.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Asisipho:asisipho@cluster0.o9chy.mongodb.net/phonebookDatabase?retryWrites=true&w=majority',
      { autoCreate: true },
    ),
    // MongooseModule.forRoot('mongodb://localhost:27017/PHONEBOOK_DB', {
    //   autoCreate: true,
    // }),
    PhonebookModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
