<template>
    <div class="chat-window">
        <div class="messages" ref="msgBox">
            <div class="single" v-for="message in formattedMessages" :key="message.id">
                <span class="created-at">{{ message.created_at}}</span>
                <span class="name">{{ message.name }}</span>
                <span class="message">{{ message.message }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from '@/firebase/config';
import { computed, onUpdated, ref } from 'vue';
import { formatDistanceToNow } from 'date-fns/esm';

    export default {
        setup(){
            let messages = ref([]);
            let msgBox = ref(null);
            //auto scrolling feature 
            onUpdated(()=>{
                msgBox.value.scrollTop = msgBox.value.scrollHeight
            })
            // to change date format
            let formattedMessages = computed(()=>{
                return messages.value.map((msg)=>{
                    let fromat_time = formatDistanceToNow(msg.created_at.toDate());
                    return {...msg, created_at :fromat_time}
                })
            })
            // to push data on firebse
            db.collection("message").orderBy("created_at").onSnapshot((snap)=>{
            let results = []; // for real time db this snapshot run again and empty array again
                snap.docs.forEach((doc)=>{
                    let document = {...doc.data(), id : doc.id};
                    // like if condition
                    doc.data().created_at && results.push(document);
                })
            messages.value = results;
            })

            return {messages, formattedMessages, msgBox}
        }
    }
</script>

<style>
     .chat-window {
        background: #fafafa;
        padding: 30px 20px;
      }
      .single {
        margin: 18px 0;
      }
      .created-at {
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
      }
      .name {
        font-weight: bold;
        margin-right: 6px;
      }
      .messages {
        max-height: 400px;
        overflow: auto;
      }
</style>